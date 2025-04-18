import { GraphQLError } from 'graphql';
import nodemailer from 'nodemailer';
import { config } from '../../config/config.js';

export class GraphqlEmailService {
  async sendEmail(subject: string, html: string, toEmail: string): Promise<void> {
    try {
      const mail_transport = nodemailer.createTransport({
        host: config.smtp.SMTP_HOST,
        port: config.smtp.SMTP_PORT,
        auth: { user: config.smtp.SMTP_USER, pass: config.smtp.SMTP_PASSWORD },
      });

      const res = await mail_transport.sendMail({
        from: `DoNotReply <${config.email.EMAIL_FROM}>`,
        to: toEmail,
        replyTo: config.email.EMAIL_FROM,
        subject: subject,
        html: html,
      });

      console.log('[Email]:', { email: res });
    } catch (error) {
      throw new GraphQLError('Error sending email');
    }
  }
}
