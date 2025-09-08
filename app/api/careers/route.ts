import { NextRequest, NextResponse } from 'next/server'
import { sendCareerApplication } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const experience = formData.get('experience') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File

    // Validate required fields
    if (!name || !email || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Convert file to buffer for email attachment
    let resumeBuffer: Buffer | undefined
    try {
      resumeBuffer = Buffer.from(await resume.arrayBuffer())
    } catch (error) {
      console.error('Error converting resume to buffer:', error)
      // Continue without attachment if buffer conversion fails
    }

    // Prepare application data
    const application = {
      name,
      email,
      phone: phone || undefined,
      experience: experience || undefined,
      message: message || undefined,
      resumeName: resume.name,
      resumeSize: resume.size,
      resumeBuffer: resumeBuffer
    }

    // Send email
    const emailSent = await sendCareerApplication(application)

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully! We will get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing career application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}