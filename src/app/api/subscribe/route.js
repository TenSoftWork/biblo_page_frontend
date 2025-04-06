import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 이메일 내용
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@biblo.ai",
      subject: "비블로(Biblo)뉴스레터 구독 신청",
      text: `새로운 구독 신청: ${email}`,
      html: `
        <h2>뉴스레터 구독 신청</h2>
        <p>새로운 사용자가 뉴스레터 구독을 신청했습니다:</p>
        <p><strong>이메일:</strong> ${email}</p>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "구독 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
} 