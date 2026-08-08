import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/contact
 * 
 * Endpoint pour traiter les soumissions de formulaire de contact
 * 
 * Body:
 * {
 *   name: string
 *   email: string
 *   company: string
 *   phone: string
 *   projectType: string
 *   budget: string
 *   message: string
 * }
 */

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      )
    }

    console.log('[v0] Contact form submission:', data)

    // Option 1: Envoyer avec SendGrid
    // await sendWithSendGrid(data)

    // Option 2: Envoyer avec Resend
    // await sendWithResend(data)

    // Option 3: Sauvegarder en base de données
    // await saveToDatabase(data)

    // Option 4: Envoyer à un webhook externe
    // await notifyWebhook(data)

    // Pour l'instant, on simule juste un succès
    console.log('[v0] Email would be sent to:', data.email)

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        data: {
          name: data.name,
          email: data.email,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * EXAMPLES D'INTÉGRATIONS:
 * 
 * ================== SENDGRID ==================
 * npm install @sendgrid/mail
 * 
 * async function sendWithSendGrid(data: ContactFormData) {
 *   const sgMail = require('@sendgrid/mail')
 *   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 *   
 *   await sgMail.send({
 *     to: 'contact@gosite.digital',
 *     from: 'noreply@yourdomain.com',
 *     subject: `New Project Inquiry from ${data.name}`,
 *     html: `
 *       <h2>New Contact Form Submission</h2>
 *       <p><strong>Name:</strong> ${data.name}</p>
 *       <p><strong>Email:</strong> ${data.email}</p>
 *       <p><strong>Company:</strong> ${data.company}</p>
 *       <p><strong>Project Type:</strong> ${data.projectType}</p>
 *       <p><strong>Budget:</strong> ${data.budget}</p>
 *       <p><strong>Message:</strong> ${data.message}</p>
 *     `,
 *   })
 * }
 * 
 * ================== RESEND ==================
 * npm install resend
 * 
 * import { Resend } from 'resend'
 * 
 * const resend = new Resend(process.env.RESEND_API_KEY)
 * 
 * async function sendWithResend(data: ContactFormData) {
 *   await resend.emails.send({
 *     from: 'Contact Form <onboarding@resend.dev>',
 *     to: 'contact@gosite.digital',
 *     subject: `New Project Inquiry from ${data.name}`,
 *     html: `...`
 *   })
 * }
 * 
 * ================== MAILGUN ==================
 * npm install mailgun.js
 * 
 * async function sendWithMailgun(data: ContactFormData) {
 *   const mailgun = require('mailgun.js')
 *   const FormData = require('form-data')
 *   const mg = mailgun.client({
 *     username: 'api',
 *     key: process.env.MAILGUN_API_KEY,
 *   })
 *   
 *   await mg.messages.create(process.env.MAILGUN_DOMAIN, {
 *     from: 'Contact Form <noreply@yourdomain.com>',
 *     to: ['contact@gosite.digital'],
 *     subject: `New Inquiry: ${data.projectType}`,
 *     html: `...`
 *   })
 * }
 */
