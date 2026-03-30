import { NextResponse } from "next/server";
import { Resend } from "resend";

// ============================================================
// RESEND SETUP
// ============================================================
// 1. Sign up at https://resend.com (free — 100 emails/day)
// 2. Get your API key from the dashboard
// 3. Add it as an environment variable:
//    - Local: create .env.local with RESEND_API_KEY=re_xxxxx
//    - Vercel: Settings → Environment Variables → add RESEND_API_KEY
// 4. (Optional) Verify your domain in Resend to send from
//    your own email instead of onboarding@resend.dev
// 5. Update LAWYER_EMAIL below with the lawyer's real email
// ============================================================

const LAWYER_EMAIL = process.env.LAWYER_EMAIL || "[lawyer-email@example.com]";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY not set. Logging form submission:");
      console.log({ name, phone, email, message });
      // Still return success — form works, just no email sent yet
      return NextResponse.json({
        success: true,
        note: "Form received. Email notifications not yet configured.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email 1: Notify the lawyer
    await resend.emails.send({
      from: "B S Manhas & Associates Website <onboarding@resend.dev>",
      to: LAWYER_EMAIL,
      subject: `New Inquiry from ${name} — ${phone}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B2A4A; border-bottom: 2px solid #B8934B; padding-bottom: 8px;">
            New Client Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #6B7280; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #2D2D2D; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Phone</td>
              <td style="padding: 8px 0; color: #2D2D2D; font-weight: 600;">
                <a href="tel:${phone}" style="color: #1B2A4A;">${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Email</td>
              <td style="padding: 8px 0; color: #2D2D2D;">
                <a href="mailto:${email}" style="color: #1B2A4A;">${email}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; color: #6B7280; vertical-align: top;">Matter</td>
              <td style="padding: 8px 0; color: #2D2D2D;">${message}</td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #6B7280; margin-top: 24px; border-top: 1px solid #E5E2DE; padding-top: 12px;">
            This inquiry was submitted through the B S Manhas & Associates website contact form.
          </p>
        </div>
      `,
    });

    // Email 2: Confirmation to client (only if they provided email)
    if (email) {
      await resend.emails.send({
        from: "B S Manhas & Associates <onboarding@resend.dev>",
        to: email,
        subject: "We have received your inquiry — B S Manhas & Associates",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1B2A4A;">Thank You for Reaching Out</h2>
            <p style="color: #2D2D2D; line-height: 1.6;">
              Dear ${name},
            </p>
            <p style="color: #2D2D2D; line-height: 1.6;">
              We have received your inquiry and will review it shortly.
              A member of our team will get back to you within 24 hours.
            </p>
            <p style="color: #2D2D2D; line-height: 1.6;">
              If your matter is urgent, please do not hesitate to call us directly
              at <a href="tel:+919419000016" style="color: #1B2A4A; font-weight: 600;">+91 94190 00016</a>
              or message us on
              <a href="https://wa.me/919419000016" style="color: #25D366; font-weight: 600;">WhatsApp</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #E5E2DE; margin: 24px 0;" />
            <p style="font-size: 13px; color: #6B7280;">
              <strong>B S Manhas & Associates</strong><br />
              19 A Bhawani Nagar, Janipur<br />
              Jammu, Jammu & Kashmir — 180007<br />
              Phone: +91 94190 00016
            </p>
            <p style="font-size: 11px; color: #9CA3AF; margin-top: 16px;">
              Please note: This is an automated acknowledgment. Contacting us does not
              create a lawyer-client relationship. Please read our
              <a href="https://bsmanhas.vercel.app/disclaimer" style="color: #6B7280;">Disclaimer</a>.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
