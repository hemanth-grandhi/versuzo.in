import nodemailer from "nodemailer";
import { env } from "../config/index.js";
import { logRepository } from "../repositories/log.repository.js";

const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const smtpFrom = process.env.SMTP_FROM || '"Versuzo" <no-reply@versuzo.com>';

let transporter: nodemailer.Transporter;
const isMockMode = !(smtpHost && smtpUser && smtpPass);

if (!isMockMode) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
  console.log("Nodemailer: SMTP Email Transporter configured.");
} else {
  // Stream transport mocks sending by returning the raw message streams in logs
  transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: "windows",
    buffer: true,
  });
  console.log("Nodemailer: SMTP credentials missing. Running in DEV console-logger mode.");
}

export class EmailService {
  /**
   * Helper to send HTML emails, logging the results or printing to terminal in dev mode
   */
  private async sendMail(
    to: string,
    subject: string,
    html: string,
    text: string
  ): Promise<void> {
    try {
      const mailOptions = {
        from: smtpFrom,
        to,
        subject,
        text,
        html,
      };

      const info = await transporter.sendMail(mailOptions);

      if (isMockMode) {
        console.log("\n=================== DEV MOCK EMAIL SENT ===================");
        console.log(`To: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log(`Text Body:\n${text}`);
        console.log("===========================================================\n");

        await logRepository.create(null, "EMAIL_MOCK_SENT", { to, subject });
      } else {
        console.log(`Real email successfully sent to ${to}. Message ID: ${info.messageId}`);
        await logRepository.create(null, "EMAIL_REAL_SENT", {
          to,
          subject,
          messageId: info.messageId,
        });
      }
    } catch (err: any) {
      console.error("Failed to send email:", err.message);
      await logRepository.create(null, "EMAIL_SEND_FAILED", {
        to,
        subject,
        error: err.message,
      });
    }
  }

  /**
   * Sends the branded welcome email to a newly registered user.
   */
  async sendWelcomeEmail(
    name: string,
    email: string,
    verificationToken: string | null
  ): Promise<void> {
    const subject = "Welcome to Versuzo - Your Career Growth Journey Starts Here";
    const verificationUrl = verificationToken
      ? `${env.frontendUrl}/login?verify=${verificationToken}`
      : "";

    const text = `Hello ${name},

Welcome to Versuzo!

Thank you for joining our learning community. We are excited to help you build industry-relevant skills, gain practical experience, and accelerate your career growth.

As a Versuzo learner, you will have access to:
- Industry-Aligned Training Programs
- Hands-On Projects
- Internship Opportunities
- Professional Certifications
- Career Guidance & Mentorship
- Placement Support

We look forward to being part of your professional journey.

${verificationToken ? `Please verify your email address by visiting this link: ${verificationUrl}\n\n` : ""}If you have any questions, feel free to reach out to our team.

Best Regards,
Team Versuzo
Upskill. Experience. Succeed.`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Versuzo</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background-color: #0f172a; padding: 30px 20px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; }
          .header span { color: #38bdf8; }
          .content { padding: 40px 30px; line-height: 1.6; }
          .greeting { font-size: 18px; font-weight: 700; margin-bottom: 20px; }
          .benefits { background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 25px 0; list-style-type: none; padding-left: 15px; }
          .benefits li { margin-bottom: 10px; font-size: 14px; display: flex; align-items: center; }
          .benefits li span { margin-right: 10px; }
          .btn { display: inline-block; background-color: #0284c7; color: #ffffff !important; text-decoration: none; padding: 12px 24px; font-weight: bold; border-radius: 8px; margin: 20px 0; text-align: center; }
          .btn:hover { background-color: #0369a1; }
          .footer { background-color: #f8fafc; padding: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Ver<span>suzo</span></h1>
          </div>
          <div class="content">
            <div class="greeting">Hello ${name},</div>
            <p>Welcome to Versuzo!</p>
            <p>Thank you for joining our learning community. We are excited to help you build industry-relevant skills, gain practical experience, and accelerate your career growth.</p>

            <p>As a Versuzo learner, you will have access to:</p>
            <ul class="benefits">
              <li><span>-</span> Industry-Aligned Training Programs</li>
              <li><span>-</span> Hands-On Projects</li>
              <li><span>-</span> Internship Opportunities</li>
              <li><span>-</span> Professional Certifications</li>
              <li><span>-</span> Career Guidance & Mentorship</li>
              <li><span>-</span> Placement Support</li>
            </ul>

            ${verificationToken ? `
              <p>Please verify your email address to complete your registration:</p>
              <div style="text-align: center;">
                <a href="${verificationUrl}" class="btn" target="_blank">Verify Email Address</a>
              </div>
              <p style="font-size: 11px; color: #64748b; word-break: break-all; margin-top: 10px;">
                Or copy and paste this URL into your browser: <br/> ${verificationUrl}
              </p>
            ` : ""}

            <p>We look forward to being part of your professional journey.</p>
            <p>If you have any questions, feel free to reach out to our team.</p>

            <div style="margin-top: 30px; border-t: 1px solid #f1f5f9; padding-top: 20px;">
              <strong>Best Regards,</strong><br/>
              Team Versuzo<br/>
              <span style="font-size: 12px; color: #64748b;">Upskill. Experience. Succeed.</span>
            </div>
          </div>
          <div class="footer">
            &copy; 2026 Versuzo. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendMail(email, subject, html, text);
  }

  /**
   * Sends a password reset link to the user.
   */
  async sendResetPasswordEmail(
    name: string,
    email: string,
    resetToken: string
  ): Promise<void> {
    const subject = "Reset Your Versuzo Password";
    const resetUrl = `${env.frontendUrl}/reset-password?token=${resetToken}`;

    const text = `Hello ${name},

We received a request to reset your password for your Versuzo account.

If you made this request, please visit the link below to set a new password:
${resetUrl}

This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.

Best Regards,
Team Versuzo`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Reset Password</title>
        <style>
          body { font-family: sans-serif; background-color: #f8fafc; color: #0f172a; padding: 20px; }
          .card { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .btn { display: inline-block; background-color: #ea580c; color: white !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="card">
          <h3>Hello ${name},</h3>
          <p>We received a request to reset your password for your Versuzo account.</p>
          <p>Please click the button below to set a new password. This link is valid for 1 hour:</p>
          <div style="text-align: center;">
            <a href="${resetUrl}" class="btn" target="_blank">Reset Password</a>
          </div>
          <p style="font-size: 11px; color: #64748b; word-break: break-all;">
            Link: ${resetUrl}
          </p>
          <p>If you did not request this change, you can ignore this email.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
          <p style="font-size: 12px; color: #64748b;">Team Versuzo</p>
        </div>
      </body>
      </html>
    `;

    await this.sendMail(email, subject, html, text);
  }
}

export const emailService = new EmailService();
