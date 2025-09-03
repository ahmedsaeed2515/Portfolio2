import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = {
      from: `Portfolio Contact <${
        process.env.FROM_EMAIL || "noreply@portfolio.com"
      }>`,
      to: [process.env.TO_EMAIL || "ahmedsaeed2515@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #111;">
            <h2>New Contact Form Submission</h2>
            <div>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div>
              <h3>Message</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="color:#64748b; font-size:12px;">
              <p>This email was sent from your portfolio website contact form.</p>
              <p>Reply to: ${email}</p>
            </div>
          </body>
        </html>
      `,
    };

    const result = await resend.emails.send(emailData);

    if (result.error) {
      console.error("Failed to send email:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
