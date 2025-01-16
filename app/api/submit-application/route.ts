import { NextRequest, NextResponse } from 'next/server';
import { submitApplication } from '../../job-openings/apply/actions';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const result = await submitApplication(formData);
  return NextResponse.json(result);
}
