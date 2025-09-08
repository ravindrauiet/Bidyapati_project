import { NextRequest, NextResponse } from 'next/server'
import { sendContactForm } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, subject, message } = await request.json()

    // Validate required fields
    if (!firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, email, subject, and message are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData = {
      firstName,
      lastName: lastName || '',
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message
    }

    // Send email
    const emailSent = await sendContactForm(formData)

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
