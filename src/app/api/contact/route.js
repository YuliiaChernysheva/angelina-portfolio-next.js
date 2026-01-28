// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     await resend.emails.send({
//       from: process.env.FROM_EMAIL,
//       to: process.env.TO_EMAIL,
//       subject: "Нова заявка з сайту",
//       html: `
//         <h2>Нова заявка</h2>
//         <p><b>Імʼя:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Повідомлення:</b><br/>${message}</p>
//       `,
//     });

//     return Response.json({ ok: true });
//   } catch (e) {
//     return Response.json({ ok: false }, { status: 500 });
//   }
// }

import { Resend } from "resend";

export const runtime = "nodejs"; // важливо для Vercel + Resend

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    console.log("📩 API /contact called");

    const { name, email, message } = await req.json();

    console.log("📨 Form data:", { name, email, message });
    console.log("🔑 RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("➡️ TO_EMAIL:", process.env.TO_EMAIL);
    console.log("⬅️ FROM_EMAIL:", process.env.FROM_EMAIL);

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Нова заявка з сайту",
      reply_to: email, // дуже важливо
      html: `
        <h2>Нова заявка</h2>
        <p><b>Імʼя:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Повідомлення:</b><br/>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return Response.json({ ok: false, error }, { status: 500 });
    }

    console.log("✅ Email sent:", data);

    return Response.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("🔥 API crash:", e);
    return Response.json({ ok: false, message: e?.message }, { status: 500 });
  }
}
