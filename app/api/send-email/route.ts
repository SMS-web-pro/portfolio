import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || 'siteup.services@gmail.com'
const SMTP_PASS = process.env.SMTP_PASS || ''
const TO_EMAIL = process.env.TO_EMAIL || 'contact@gosite.digital'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, projectType, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const htmlContent = [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<style>',
      'body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }',
      '.container { max-width: 600px; margin: 0 auto; padding: 20px; }',
      '.header { background-color: #0047ab; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }',
      '.content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }',
      '.field { margin-bottom: 15px; }',
      '.label { font-weight: bold; color: #0047ab; }',
      '.value { color: #0f1419; }',
      '.message-box { background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 15px; }',
      '.footer { text-align: center; padding: 10px; color: #6b7280; font-size: 12px; }',
      '</style>',
      '</head>',
      '<body>',
      '<div class="container">',
      '<div class="header">',
      '<h2>Nouveau message depuis votre site</h2>',
      '</div>',
      '<div class="content">',
      '<div class="field"><span class="label">Nom:</span> <span class="value">' + name + '</span></div>',
      '<div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:' + email + '">' + email + '</a></span></div>',
      company ? '<div class="field"><span class="label">Entreprise:</span> <span class="value">' + company + '</span></div>' : '',
      phone ? '<div class="field"><span class="label">Téléphone:</span> <span class="value"><a href="tel:' + phone + '">' + phone + '</a></span></div>' : '',
      projectType ? '<div class="field"><span class="label">Type de projet:</span> <span class="value">' + projectType + '</span></div>' : '',
      budget ? '<div class="field"><span class="label">Budget:</span> <span class="value">' + budget + '</span></div>' : '',
      '<div class="message-box"><span class="label">Message:</span><p>' + message + '</p></div>',
      '</div>',
      '<div class="footer"><p>Ce message a été envoyé depuis le formulaire de contact de goSite.digital</p></div>',
      '</div>',
      '</body>',
      '</html>'
    ].join('\n')

    const textParts = [
      'Nouveau message depuis votre site',
      '',
      'Nom: ' + name,
      'Email: ' + email,
      company ? 'Entreprise: ' + company : '',
      phone ? 'Téléphone: ' + phone : '',
      projectType ? 'Type de projet: ' + projectType : '',
      budget ? 'Budget: ' + budget : '',
      '',
      'Message:',
      message
    ].filter(Boolean).join('\n')

    const mailOptions = {
      from: '"' + name + '" <' + SMTP_USER + '>',
      to: TO_EMAIL,
      replyTo: email,
      subject: 'Nouveau message de ' + name + ' - ' + (projectType || 'Contact'),
      html: htmlContent,
      text: textParts
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi' },
      { status: 500 }
    )
  }
}
