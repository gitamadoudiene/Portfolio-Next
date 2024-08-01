import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Configurez votre service EmailJS
      const result = await emailjs.send('your_service_id', 'your_template_id', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
      }, 'your_user_id');

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
