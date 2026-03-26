import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, homeWorkout, goals, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mhurtado007@gmail.com",
    subject: `New Book a Session Request — ${name}`,
    html: `
      <h2>New Book a Session Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Works out at home:</strong> ${homeWorkout || "Not specified"}</p>
      <p><strong>Fitness Goals:</strong> ${goals || "Not specified"}</p>
      <p><strong>Anything else:</strong> ${message || "None"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
