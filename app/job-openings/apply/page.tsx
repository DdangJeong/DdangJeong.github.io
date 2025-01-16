'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Layout from '../../components/layout'
import { submitApplication } from './actions'

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await submitApplication(formData)

      if (result.success) {
        alert('지원서가 성공적으로 제출되었습니다.')
        router.push('/')
      } else {
        alert(result.error || '제출 중 오류가 발생했습니다.')
      }
    } catch (error) {
      alert('제출 중 오류가 발생했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Application Form</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="position">Position</Label>
              <Select name="position" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phd">PhD Student</SelectItem>
                  <SelectItem value="ms-phd">MS-PhD Integrated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label htmlFor="research-area">Research Area of Interest</Label>
              <Select name="research-area" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select research area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="physics-nn">Physics Informed Neural Network</SelectItem>
                  <SelectItem value="medical">Medical Image Segmentation</SelectItem>
                  <SelectItem value="anomaly">Multimodal Anomaly Detection</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" name="first-name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" name="last-name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <Input id="university" name="university" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <Input id="major" name="major" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA</Label>
                <Input id="gpa" name="gpa" type="number" step="0.01" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Research Experience</Label>
              <Textarea 
                id="experience" 
                name="experience" 
                placeholder="Please describe your relevant research experience"
                className="min-h-[100px]"
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">CV/Resume</Label>
              <Input 
                id="cv" 
                name="cv" 
                type="file" 
                accept=".pdf,.doc,.docx" 
                required 
              />
              <p className="text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transcript">Academic Transcript</Label>
              <Input 
                id="transcript" 
                name="transcript" 
                type="file" 
                accept=".pdf" 
                required 
              />
              <p className="text-sm text-gray-500">PDF format only</p>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2" />
                  제출 중...
                </div>
              ) : (
                '제출하기'
              )}
            </Button>

            {isSubmitting && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700">제출 중입니다...</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  )
}

