import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, telegram, message } = await req.json();

    if (!email || !telegram || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the transporter
    // Note: You must add these variables to your .env or .env.local file.
    // Example for Gmail:
    // SMTP_HOST="smtp.gmail.com"
    // SMTP_PORT="587"
    // SMTP_USER="your-email@gmail.com"
    // SMTP_PASS="your-app-password"
    // CONTACT_EMAIL="where-you-want-to-receive-emails@example.com"
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receives the email
      replyTo: email, // If you hit reply, it goes to the user who filled the form
      subject: `New Pitch/Contact from ${telegram}`,
      text: `
You have received a new contact form submission from Advantage Venture.

Email: ${email}
Telegram: ${telegram}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telegram:</strong> ${telegram}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Check SMTP configuration.' },
      { status: 500 }
    );
  }
}
