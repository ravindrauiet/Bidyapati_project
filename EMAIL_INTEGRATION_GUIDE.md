# Email Integration Guide for Career Applications

## Current Status
✅ **Form functionality is complete** - Users can submit career applications with resume uploads
✅ **API endpoint is ready** - `/api/careers` processes form submissions
✅ **User feedback is implemented** - Success/error messages with loading states
✅ **Data logging is active** - All applications are logged to console

## Email Integration Options

Currently, the system logs all career applications to the console. To actually send emails to `ravindranthjhs76@gmail.com`, you need to integrate with an email service.

### Option 1: SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Install: `npm install @sendgrid/mail`
4. Update `lib/email-service.ts` with SendGrid integration

### Option 2: Nodemailer with Gmail
1. Install: `npm install nodemailer @types/nodemailer`
2. Create Gmail app password
3. Update `lib/email-service.ts` with Nodemailer configuration

### Option 3: Resend (Modern & Simple)
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Install: `npm install resend`
4. Update `lib/email-service.ts` with Resend integration

### Option 4: EmailJS (Client-side)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Configure email service
3. Update the frontend to use EmailJS directly

### Option 5: Formspree (No Backend)
1. Sign up at [Formspree](https://formspree.io/)
2. Get form endpoint
3. Update form action to use Formspree endpoint

## Quick Setup with SendGrid

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Add environment variable:**
   ```bash
   # .env.local
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

3. **Update `lib/email-service.ts`:**
   ```typescript
   import sgMail from '@sendgrid/mail'
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
   
   export async function sendCareerApplication(application: CareerApplication): Promise<boolean> {
     try {
       const msg = {
         to: 'ravindranthjhs76@gmail.com',
         from: 'noreply@glominoverseas.com', // Your verified sender
         subject: `New Career Application from ${application.name}`,
         text: `...`, // Your email content
         html: `...` // Your HTML email content
       }
       
       await sgMail.send(msg)
       return true
     } catch (error) {
       console.error('SendGrid error:', error)
       return false
     }
   }
   ```

## Current Form Features

- ✅ **File Upload**: PDF, DOC, DOCX support (max 5MB)
- ✅ **Form Validation**: Required fields validation
- ✅ **Loading States**: Spinner during submission
- ✅ **Success/Error Feedback**: User-friendly messages
- ✅ **Form Reset**: Clears form after successful submission
- ✅ **Responsive Design**: Works on all devices

## Testing

1. Go to `http://localhost:3000/careers`
2. Fill out the form with test data
3. Upload a resume file
4. Submit the form
5. Check the browser console for logged application data
6. Verify success message appears

## Next Steps

1. Choose an email service from the options above
2. Follow the integration steps
3. Test with real email delivery
4. Monitor email delivery in your chosen service dashboard

The form is fully functional and ready for email integration!

