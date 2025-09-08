import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, experience, message, resumeData, resumeName } = await request.json()

    // Create email content
    const emailContent = `
New Career Application Received

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Experience: ${experience || 'Not specified'}

Cover Letter:
${message || 'No cover letter provided'}

Resume: ${resumeName}

---
This application was submitted through the Glomin Overseas careers page.
    `.trim()

    // Using a simple webhook service like Formspree, Netlify Forms, or EmailJS
    // For now, we'll use a simple approach that logs the data
    // You can replace this with your preferred email service

    const emailPayload = {
      to: 'ravindranthjhs76@gmail.com',
      subject: `New Career Application from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Career Application Received</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
          </div>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af;">Cover Letter:</h3>
            <p style="white-space: pre-wrap;">${message || 'No cover letter provided'}</p>
          </div>
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Resume:</strong> ${resumeName}</p>
            <p style="color: #059669; font-size: 14px;">Resume file was uploaded with the application.</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px;">
            This application was submitted through the Glomin Overseas careers page.
          </p>
        </div>
      `
    }

    // Log the email data (in production, send to your email service)
    console.log('=== CAREER APPLICATION RECEIVED ===')
    console.log('To:', emailPayload.to)
    console.log('Subject:', emailPayload.subject)
    console.log('Applicant:', name, email)
    console.log('Resume:', resumeName)
    console.log('=====================================')

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

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

