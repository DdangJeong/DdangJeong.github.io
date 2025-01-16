'use server'

import nodemailer from 'nodemailer';
import { createReadStream, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { unlink } from 'fs/promises';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

export async function submitApplication(formData: FormData) {
  try {
    console.log('Starting file upload process...');
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    const position = formData.get('position') as string;
    const researchArea = formData.get('research-area') as string;
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const email = formData.get('email') as string;
    const university = formData.get('university') as string;
    const major = formData.get('major') as string;
    const gpa = formData.get('gpa') as string;
    const experience = formData.get('experience') as string;
    const cv = formData.get('cv') as File;
    const transcript = formData.get('transcript') as File;

    // Check file sizes
    if (cv.size > MAX_FILE_SIZE || transcript.size > MAX_FILE_SIZE) {
      return { 
        success: false, 
        error: '파일 크기는 25MB를 초과할 수 없습니다.' 
      };
    }

    console.log('Form data received:', {
      position,
      firstName,
      lastName,
      email,
      cv: cv?.name,
      transcript: transcript?.name
    });

    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const transcriptBuffer = Buffer.from(await transcript.arrayBuffer());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Spatail AI Lab (SAIL) 지원서 (${firstName} ${lastName}, ${university})`,
      text: `
        새로운 Spatail AI Lab (SAIL) 지원서가 제출되었습니다.

        지원자 정보:
        - 이름: ${firstName} ${lastName}
        - 이메일: ${email}
        - 학교: ${university}
        - 전공: ${major}
        - GPA: ${gpa}
        - 지원 포지션: ${position}
        - 연구 관심 분야: ${researchArea}

        연구 경험:
        ${experience}
      `,
      attachments: [
        {
          filename: `CV_${firstName}_${lastName}.pdf`,
          content: cvBuffer
        },
        {
          filename: `Transcript_${firstName}_${lastName}.pdf`,
          content: transcriptBuffer
        }
      ]
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // .env에서 로드된 이메일
        pass: process.env.EMAIL_PASS  // .env에서 로드된 비밀번호
      }
    });

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
    
      if (error instanceof Error) {
        return { success: false, error: error.message };
      }
    
      return { success: false, error: 'An unknown error occurred' };
    }  
  } catch (error) {
    console.error('Detailed error:', error);
    return { success: false, error: String(error) };
  }
}
