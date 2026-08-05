// EmailJS Configuration
// Pour configurer EmailJS:
// 1. Allez sur https://www.emailjs.com/
// 2. Créez un compte gratuit
// 3. Créez un service email (connectez votre Gmail)
// 4. Créez un template d'email
// 5. Remplacez les valeurs ci-dessous par vos vraies clés

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_25sve4s', // Votre Service ID
  TEMPLATE_ID: 'template_cl390gb', // Votre Template ID  
  PUBLIC_KEY: 'qBNByPU_o-2TgRz6c', // Votre Public Key
  TO_EMAIL: 'contact@siteupservices.online' // Votre email de destination
}

// Template suggéré pour EmailJS:
/*
Sujet: Nouveau message de {{from_name}} - {{project_type}}

Contenu:
Nom: {{from_name}}
Email: {{from_email}}
Entreprise: {{company}}
Téléphone: {{phone}}
Type de projet: {{project_type}}
Budget: {{budget}}

Message:
{{message}}
*/
