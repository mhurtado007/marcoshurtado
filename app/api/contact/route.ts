import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, homeWorkout, goals, questions } =
    await req.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mhurtado007@gmail.com",
    subject: `New Contact Form Submission — ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Works out from home:</strong> ${homeWorkout}</p>
      <p><strong>Goals:</strong> ${goals.length ? goals.join(", ") : "None selected"}</p>
      <p><strong>Questions:</strong> ${questions || "None"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
