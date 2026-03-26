import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, selectedClass } = await req.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mhurtado007@gmail.com",
    subject: `New Free Trial Sign-Up — ${name}`,
    html: `
      <h2>New Free Trial Sign-Up</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Class Selected:</strong> ${selectedClass}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
