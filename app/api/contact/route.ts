import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, firstName, lastName, email, phone, message, service, preferredDate } = body;

    // Combine firstName and lastName if separate fields are used
    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

    // Setup mail transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Gmail address
        pass: process.env.GMAIL_PASS, // App password (not your Gmail login)
      },
    });

    // Email content
    const mailOptions = {
      from: `"RevissaWay Website" <${process.env.GMAIL_USER}>`,
      to: "revissaway@gmail.com",
      subject: "New Consultation / Contact Form Submission - RevissaWay",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f5f0; border-radius: 10px;">
          <div style="background-color: #9B7E3E; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">New Inquiry from RevissaWay Website</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              You have received a new consultation request:
            </p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 12px 0; color: #333;">${fullName || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Email:</td>
                <td style="padding: 12px 0; color: #333;">${email || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Phone:</td>
                <td style="padding: 12px 0; color: #333;">${phone || 'Not provided'}</td>
              </tr>
              ${service ? `
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Service:</td>
                <td style="padding: 12px 0; color: #333;">${service}</td>
              </tr>
              ` : ''}
              ${preferredDate ? `
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 12px 0; color: #333;">${preferredDate}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #333;">${message || 'No message provided'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #9B7E3E;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Sent from RevissaWay Contact Form<br>
                Time: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}

