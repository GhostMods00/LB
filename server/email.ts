import type { ContactForm, CareersForm } from "../shared/schema";

// Rate limiting store (in-memory for simplicity, could use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 10; // 10 submissions per window (increased for testing/development)

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Email service - ready for Resend integration
export async function sendContactEmail(data: ContactForm): Promise<boolean> {
  const { EMAIL_FROM, EMAIL_TO, RESEND_API_KEY } = process.env;

  // If no email credentials configured, log and return success for development
  if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
    console.log("📧 Contact form submission (email not configured):");
    console.log(JSON.stringify(data, null, 2));
    return true;
  }

  try {
    // Resend API integration
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        reply_to: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Submitted from lundybuilding.com.au contact form
          </p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.statusText}`);
    }

    console.log("✅ Contact email sent successfully");
    return true;
  } catch (error) {
    console.error("❌ Failed to send contact email:", error);
    return false;
  }
}

export async function sendCareersEmail(data: CareersForm): Promise<boolean> {
  const { EMAIL_FROM, EMAIL_TO, RESEND_API_KEY } = process.env;

  // If no email credentials configured, log and return success for development
  if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
    console.log("📧 Careers form submission (email not configured):");
    console.log(JSON.stringify(data, null, 2));
    return true;
  }

  try {
    // Resend API integration
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        reply_to: data.email,
        subject: `New Job Application from ${data.name} - ${data.roleInterest}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Role of Interest:</strong> ${data.roleInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
          ${data.resumeUrl ? `<p><strong>Resume:</strong> <a href="${data.resumeUrl}">${data.resumeUrl}</a></p>` : ""}
          <hr>
          <p style="color: #666; font-size: 12px;">
            Submitted from lundybuilding.com.au careers form
          </p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.statusText}`);
    }

    console.log("✅ Careers email sent successfully");
    return true;
  } catch (error) {
    console.error("❌ Failed to send careers email:", error);
    return false;
  }
}
