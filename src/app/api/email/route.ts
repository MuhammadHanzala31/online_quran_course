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
      from: `Website Form" <${'onlinequrancourse.com'}>`,
      to: email,
      subject: "Registration Form OQC",
      html: `
    <body
  style="
    margin: 0;
    padding: 0;
    background-color: #f4f7f5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  "
>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px 10px">

        <!-- MAIN BOX -->
        <table
          width="620"
          cellpadding="0"
          cellspacing="0"
          style="
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          "
        >
          <!-- TOP LINE -->
          <tr>
            <td style="height:5px; background:#098a46;"></td>
          </tr>

          <!-- HERO IMAGE -->
          <tr>
            <td>
              <img
                src="https://res.cloudinary.com/dvcfuwk8i/image/upload/v1775259953/oqc_image-01_byxzl6.png"
                width="100%"
                style="display:block;"
              />
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:40px 45px; color:#333;">

              <p style="font-size:16px;">
                Assalamu Alaikum <strong>${name}</strong>,
              </p>

              <p style="font-size:16px; line-height:1.7;">
                JazakAllah for registering for our <strong>Online Quran Course</strong>.
                We have received your details successfully. Our team will contact you shortly
                for your trial class.
              </p>

              <p style="margin-top:20px; font-size:16px;">
                Here are your submitted details:
              </p>

              <!-- USER INFO -->
              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="
                  border:1px solid #e6e6e6;
                  border-radius:6px;
                  margin-top:10px;
                "
              >
                <tr style="background:#f9f9f9;">
                  <td><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td><strong>Phone:</strong></td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td><strong>Country:</strong></td>
                  <td>${city}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td><strong>Course:</strong></td>
                  <td>${course}</td>
                </tr>
              </table>

              <!-- BUTTON -->
              <table width="100%" style="margin-top:30px;">
                <tr>
                  <td align="center">
                    <a
                      href="https://onlinequrancourse.com"
                      style="
                        background:#098a46;
                        color:#ffffff;
                        padding:14px 28px;
                        text-decoration:none;
                        border-radius:4px;
                        font-weight:600;
                        display:inline-block;
                      "
                    >
                      Visit Website
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin-top:30px; font-size:14px;">
                If you have any questions, feel free to contact us anytime.
              </p>

              <p style="font-size:14px;">
                Regards,<br />
                <strong style="color:#098a46;">Online Quran Course Team</strong>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                background:#e9f5ee;
                text-align:center;
                padding:20px;
                font-size:13px;
                color:#555;
              "
            >
              onlinequrancourse@gmail.com <br />
              www.onlinequrancourse.com
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