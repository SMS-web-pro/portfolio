/**
 * EXEMPLE D'INTÉGRATION EMAILJS
 * 
 * 1. Installer EmailJS:
 *    npm install @emailjs/browser
 * 
 * 2. S'inscrire sur emailjs.com
 * 
 * 3. Créer un service (Gmail, Outlook, etc.)
 * 
 * 4. Créer un template email
 * 
 * 5. Utiliser ce code dans Contact.tsx
 */

import emailjs from '@emailjs/browser'

// Remplacer par vos vraies clés from emailjs.com
const SERVICE_ID = 'service_xxxxxxxxxxxxx'
const TEMPLATE_ID = 'template_xxxxxxxxxxxxx'
const PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxx'

// Initialiser EmailJS une seule fois
export const initializeEmailJS = () => {
  emailjs.init(PUBLIC_KEY)
}

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_email: 'contact@gosite.digital', // Votre email
      },
      PUBLIC_KEY
    )

    console.log('[v0] Email sent successfully:', response)
    return { success: true }
  } catch (error) {
    console.error('[v0] Email error:', error)
    return { success: false, error }
  }
}

/**
 * TEMPLATE EMAIL EMAILJS EXAMPLE:
 * 
 * Subject: New Project Inquiry from {{from_name}}
 * 
 * Body:
 * ===================================
 * Hello,
 * 
 * You have a new project inquiry:
 * 
 * Name: {{from_name}}
 * Email: {{from_email}}
 * Company: {{company}}
 * Phone: {{phone}}
 * Project Type: {{project_type}}
 * Budget: {{budget}}
 * 
 * Message:
 * {{message}}
 * 
 * ===================================
 * Best regards,
 * EmailJS Service
 */
