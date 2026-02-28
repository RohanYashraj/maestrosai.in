import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact";

// Avoid crashing if RESEND_API_KEY is not set during local dev
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Server-side validation
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 },
      );
    }

    const { name, email, company, role, area, message } = result.data;

    console.log(
      `[Contact Form] Submission received from ${name} (${email}) at ${company}`,
    );

    if (!resend) {
      console.warn(
        "[Contact Form] RESEND_API_KEY not found. Skipping email delivery.",
      );
      return NextResponse.json({
        message: "Message received (API key missing - check console)",
        success: true,
      });
    }

    const emailHtml = `
      <div style="font-family: 'IBM Plex Sans', sans-serif; color: #0a0a0a; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 40px;">
        <div style="border-bottom: 2px solid #00d1b2; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="font-family: 'IBM Plex Serif', serif; font-size: 24px; font-weight: bold; margin: 0;">MaestrosAI <span style="font-weight: normal; color: #666;">| Contact Request</span></h1>
        </div>

        <p style="font-size: 16px;">Hello ${name},</p>
        <p style="font-size: 16px;">Thank you for reaching out to MaestrosAI. We have received your inquiry regarding <strong>${area}</strong> and our team will get back to you shortly.</p>
        
        <div style="background-color: #f9f9f9; padding: 25px; border-left: 4px solid #0a0a0a; margin: 30px 0;">
          <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">Submission Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666; width: 120px;">Name:</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666;">Company:</td>
              <td style="padding: 8px 0; font-size: 14px;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666;">Role:</td>
              <td style="padding: 8px 0; font-size: 14px;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666;">Interest:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #00d1b2; font-weight: bold;">${area}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Your Message</h3>
          <p style="font-size: 14px; color: #333; white-space: pre-wrap; background: #fff; border: 1px solid #eee; padding: 15px;">${message}</p>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #999;">
          <p>This is an automated confirmation of your request. One of our experts will contact you via email to discuss next steps.</p>
          <p style="margin-top: 20px;">Best regards,<br/>The MaestrosAI Team</p>
        </div>
      </div>
    `;

    // Send email to team AND the person who sent it
    await resend.emails.send({
      from: "MaestrosAI <newsletter@sutra.rohanyashraj.com>",
      to: [email],
      bcc: ["rohanyashraj@gmail.com", "sai1000@gmail.com"],
      replyTo: email,
      subject: `Requirement Received: ${name} (${company})`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
