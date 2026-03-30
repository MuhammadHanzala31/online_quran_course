import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, course, phone, city, agreed,age } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: "Missing fields" });
    }

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Website Form" <${'process.env.EMAIL_USER'}>`,
      to: email,
      subject: "Registration Form OQC",
      html: `
     <body
  style="
    margin: 0;
    padding: 0;
    background-color: #f5f0eb;
    font-family: Georgia, serif;
  "
>
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f0eb">
    <tr>
      <td align="center" style="padding: 10px 10px">

        <!-- MAIN CONTAINER -->
        <table
          width="620"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            background-color: #ffffff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          "
        >

          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color: #d4c4b4; padding: 36px 40px">
              <img
                src="https://onlinequrancourse.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOnline%20Quran%20Logo%20Final.8bc36ea6.png&w=128&q=75"
                width="200"
              />
            </td>
          </tr>

          <tr>
            <td style="height: 4px; background-color: #4CAF50"></td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding: 44px 48px 36px 48px">

              <!-- GREETING -->
              <p style="font-size:16px; line-height:1.7;">
                Assalamu Alaikum <strong>${name}</strong>,
              </p>

              <!-- MESSAGE -->
              <p style="font-size:16px; line-height:1.8;">
                JazakAllah for registering for our <strong>Online Quran Course</strong>.
                We have received your details successfully. Our team will contact you shortly for your trial class.
              </p>

              <p style="font-size:16px; line-height:1.8;">
                Below are your submitted details:
              </p>

              <!-- USER DATA -->
              <table width="100%" cellpadding="8" cellspacing="0" style="border:1px solid #eee; margin-bottom:20px;">
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td><strong>Phone:</strong></td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td><strong>Country:</strong></td>
                  <td>${city}</td>
                </tr>
                <tr>
                  <td><strong>Course:</strong></td>
                  <td>${course}</td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%">
                <tr>
                  <td align="center">
                    <a
                      href="https://onlinequrancourse.com"
                      style="
                        background-color:#4CAF50;
                        color:#fff;
                        padding:14px 30px;
                        text-decoration:none;
                        border-radius:3px;
                        display:inline-block;
                      "
                    >
                      Visit Website
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin-top:30px;">
                If you have any questions, feel free to contact us anytime.
              </p>

              <p>
                Regards,<br />
                <strong style="color:#4CAF50;">Online Quran Course Team</strong>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#d4c4b4; padding:20px; text-align:center;">
              <p style="font-size:13px;">
                onlinequrancourse@gmail.com  | www.onlinequrancourse.com
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}