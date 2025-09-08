import nodemailer from 'nodemailer'

// Email service for sending contact form submissions and career applications
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
}

export interface CareerApplication {
  name: string
  email: string
  phone?: string
  experience?: string
  message?: string
  resumeName: string
  resumeSize: number
  resumeBuffer?: Buffer
}

// Create transporter for Gmail SMTP
const createTransporter = () => {
  const gmailUser = process.env.GMAIL_USER || 'glominoverseas@gmail.com'
  const gmailPassword = process.env.GMAIL_APP_PASSWORD || 'oeec wrrp zcte ikcv'
  
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: gmailUser,
      pass: gmailPassword
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    debug: true, // Enable debug logging
    logger: true // Enable logging
  })
}

export async function sendContactForm(formData: ContactFormData): Promise<boolean> {
  try {
    console.log('=== ATTEMPTING TO SEND CONTACT FORM EMAIL ===')
    console.log('Form data:', formData)
    
    const transporter = createTransporter()
    
    // Verify connection
    console.log('Verifying SMTP connection...')
    await transporter.verify()
    console.log('SMTP connection verified successfully')
    
    const emailContent = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was submitted through the Glomin Overseas contact form.
    `.trim()

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        <p style="color: #64748b; font-size: 14px; text-align: center;">
          This message was submitted through the Glomin Overseas contact form at glomin.in
        </p>
      </div>
    `

    const mailOptions = {
      from: 'glominoverseas@gmail.com',
      to: 'glominoverseas@gmail.com',
      cc: 'ravindranathjha76@gmail.com',
      subject: `New Contact Form Submission - ${formData.subject}`,
      text: emailContent,
      html: htmlContent
    }

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      cc: mailOptions.cc,
      subject: mailOptions.subject
    })

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)
    console.log('=== CONTACT FORM EMAIL SENT SUCCESSFULLY ===')
    return true
  } catch (error) {
    console.error('=== ERROR SENDING CONTACT FORM EMAIL ===')
    console.error('Error details:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    console.error('==========================================')
    return false
  }
}

export async function sendCareerApplication(application: CareerApplication): Promise<boolean> {
  try {
    console.log('=== ATTEMPTING TO SEND CAREER APPLICATION EMAIL ===')
    console.log('Application data:', application)
    
    const transporter = createTransporter()
    
    // Verify connection
    console.log('Verifying SMTP connection for career application...')
    await transporter.verify()
    console.log('SMTP connection verified successfully for career application')
    
    const emailContent = `
New Career Application Received

Name: ${application.name}
Email: ${application.email}
Phone: ${application.phone || 'Not provided'}
Experience: ${application.experience || 'Not specified'}

Cover Letter:
${application.message || 'No cover letter provided'}

Resume: ${application.resumeName} (${(application.resumeSize / 1024 / 1024).toFixed(2)} MB)
${application.resumeBuffer ? '✓ Resume file is attached to this email' : '⚠ Resume file could not be attached'}

---
This application was submitted through the Glomin Overseas careers page.
    `.trim()

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
          New Career Application Received
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Applicant Information</h3>
          <p><strong>Name:</strong> ${application.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${application.email}">${application.email}</a></p>
          <p><strong>Phone:</strong> ${application.phone || 'Not provided'}</p>
          <p><strong>Experience:</strong> ${application.experience || 'Not specified'}</p>
        </div>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Cover Letter</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${application.message || 'No cover letter provided'}</p>
        </div>
        
        <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #059669; margin-top: 0;">Resume</h3>
          <p><strong>File:</strong> ${application.resumeName}</p>
          <p><strong>Size:</strong> ${(application.resumeSize / 1024 / 1024).toFixed(2)} MB</p>
          <p style="color: #059669; font-size: 14px;">
            ${application.resumeBuffer ? '✓ Resume file is attached to this email' : '⚠ Resume file could not be attached'}
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        <p style="color: #64748b; font-size: 14px; text-align: center;">
          This application was submitted through the Glomin Overseas careers page at glomin.in
        </p>
      </div>
    `

    const mailOptions: any = {
      from: 'glominoverseas@gmail.com',
      to: 'glominoverseas@gmail.com',
      cc: 'ravindranathjha76@gmail.com',
      subject: `New Career Application from ${application.name}`,
      text: emailContent,
      html: htmlContent
    }

    // Add resume as attachment if available
    if (application.resumeBuffer) {
      // Determine content type based on file extension
      const getContentType = (filename: string) => {
        const ext = filename.toLowerCase().split('.').pop()
        switch (ext) {
          case 'pdf':
            return 'application/pdf'
          case 'doc':
            return 'application/msword'
          case 'docx':
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          default:
            return 'application/octet-stream'
        }
      }

      mailOptions.attachments = [
        {
          filename: application.resumeName,
          content: application.resumeBuffer,
          contentType: getContentType(application.resumeName)
        }
      ]
    }

    console.log('Sending career application email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      cc: mailOptions.cc,
      subject: mailOptions.subject
    })

    const result = await transporter.sendMail(mailOptions)
    console.log('Career application email sent successfully:', result.messageId)
    console.log('=== CAREER APPLICATION EMAIL SENT SUCCESSFULLY ===')
    return true
  } catch (error) {
    console.error('=== ERROR SENDING CAREER APPLICATION EMAIL ===')
    console.error('Error details:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    console.error('===============================================')
    return false
  }
}

// Example integration with SendGrid (uncomment and configure)
/*
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendCareerApplicationWithSendGrid(application: CareerApplication): Promise<boolean> {
  try {
    const msg = {
      to: 'ravindranthjhs76@gmail.com',
      from: 'noreply@glominoverseas.com',
      subject: `New Career Application from ${application.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Career Application Received</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${application.name}</p>
            <p><strong>Email:</strong> ${application.email}</p>
            <p><strong>Phone:</strong> ${application.phone || 'Not provided'}</p>
            <p><strong>Experience:</strong> ${application.experience || 'Not specified'}</p>
          </div>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af;">Cover Letter:</h3>
            <p style="white-space: pre-wrap;">${application.message || 'No cover letter provided'}</p>
          </div>
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Resume:</strong> ${application.resumeName} (${(application.resumeSize / 1024 / 1024).toFixed(2)} MB)</p>
            <p style="color: #059669; font-size: 14px;">Resume file was uploaded with the application.</p>
          </div>
        </div>
      `
    }

    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('SendGrid error:', error)
    return false
  }
}
*/

