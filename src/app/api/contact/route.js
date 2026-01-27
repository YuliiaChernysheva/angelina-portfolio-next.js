import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Нова заявка з сайту",
      html: `
        <h2>Нова заявка</h2>
        <p><b>Імʼя:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Повідомлення:</b><br/>${message}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false }, { status: 500 });
  }
}
