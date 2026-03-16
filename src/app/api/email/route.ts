import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone, city, agreed } = await req.json();

    if (!name || !email || !message) {
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
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
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
<table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #f5f0eb"
>
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
<!-- BANNER / LOGO HEADER -->
<tr>
<td
                align="center"
                style="background-color: #2c1810; padding: 36px 40px"
>
<img
                  src="https://assets.cdn.filesafe.space/a5vJ7EQ6szhm3PggOlpm/media/68ed55d2a296243d7e476b38.png"
                  alt="Zellige Tile Studio"
                  width="200"
                  style="display: block; max-width: 200px; height: auto"
                />
</td>
</tr>
 
            <!-- THIN ACCENT LINE -->
<tr>
<td style="height: 4px; background-color: #c8873a"></td>
</tr>
 
            <!-- BODY CONTENT -->
<tr>
<td style="padding: 44px 48px 36px 48px">
<!-- GREETING -->
<p
                  style="
                    margin: 0 0 24px 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #1a1a1a;
                    line-height: 1.7;
                  "
>
                  Hello {{contact.first_name}},
</p>
 
                <!-- INTRO -->
<p
                  style="
                    margin: 0 0 20px 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #3a3a3a;
                    line-height: 1.8;
                  "
>
                  It was a pleasure connecting with you at
<strong>Coverings 2026</strong>. We truly appreciated the
                  opportunity to share the story behind authentic Moroccan
                  Zellige — and to learn more about your business.
</p>
 
                <p
                  style="
                    margin: 0 0 32px 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #3a3a3a;
                    line-height: 1.8;
                  "
>
                  To help us better understand your showroom and support you
                  effectively, please complete the brief form below. Once
                  submitted, a member of our team will follow up personally to
                  discuss next steps.
</p>
 
                <!-- FORM BUTTON -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="padding-bottom: 36px">
<a
                        href="https://link.apisystem.tech/widget/form/4mre52Y37vh3WfwVWj2X"
                        style="
                          display: inline-block;
                          background-color: #2c1810;
                          color: #ffffff;
                          font-family: Georgia, serif;
                          font-size: 15px;
                          letter-spacing: 1.5px;
                          text-transform: uppercase;
                          text-decoration: none;
                          padding: 16px 36px;
                          border-radius: 2px;
                        "
>
                        Complete Reseller Form
</a>
</td>
</tr>
</table>
 
                <!-- DIVIDER -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="height: 1px; background-color: #e8e0d8"></td>
</tr>
</table>
 
                <!-- SELLER KIT SECTION -->
<p
                  style="
                    margin: 32px 0 16px 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #3a3a3a;
                    line-height: 1.8;
                  "
>
                  As a next step, we invite you to download our
<strong>Seller's Kit / Product Catalogue</strong>, which
                  outlines our product offerings and stocking formats.
</p>
 
                <!-- DOWNLOAD BUTTON -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="padding-bottom: 36px">
<a
                        href="https://assets.cdn.filesafe.space/a5vJ7EQ6szhm3PggOlpm/media/699755f18523c59b50cdb92f.pdf"
                        style="
                          display: inline-block;
                          background-color: #c8873a;
                          color: #ffffff;
                          font-family: Georgia, serif;
                          font-size: 15px;
                          letter-spacing: 1.5px;
                          text-transform: uppercase;
                          text-decoration: none;
                          padding: 16px 36px;
                          border-radius: 2px;
                        "
>
                        Download Seller's Kit
</a>
</td>
</tr>
</table>
 
                <!-- DIVIDER -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="height: 1px; background-color: #e8e0d8"></td>
</tr>
</table>
 
                <!-- CLOSING -->
<p
                  style="
                    margin: 32px 0 8px 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #3a3a3a;
                    line-height: 1.8;
                  "
>
                  We look forward to building something meaningful together.
</p>
 
                <p
                  style="
                    margin: 0;
                    font-family: Georgia, serif;
                    font-size: 16px;
                    color: #3a3a3a;
                    line-height: 1.8;
                  "
>
                  Warmly,<br />
<strong style="color: #2c1810">Zellige Tile Studio</strong>
</p>
</td>
</tr>
 
            <!-- FOOTER -->
<tr>
<td style="background-color: #2c1810; padding: 28px 48px">
<p
                  style="
                    margin: 0 0 8px 0;
                    font-family: Georgia, serif;
                    font-size: 13px;
                    color: #d4c4b4;
                    text-align: center;
                    line-height: 1.8;
                  "
>
                  (704) 502-9952 &nbsp;|&nbsp; info@zelligetilestudio.com
&nbsp;|&nbsp; zelligetilestudio.com &nbsp;|&nbsp; Charlotte,
                  NC
</p>
<p
                  style="
                    margin: 0;
                    font-family: Georgia, serif;
                    font-size: 12px;
                    color: #a08878;
                    text-align: center;
                  "
>
                  Instagram: @Zellige_Tile_Studio &nbsp;|&nbsp; YouTube:
                  @ZelligeTileStudio3583
</p>
</td>
</tr>
</table>
<!-- END MAIN CONTAINER -->
</td>
</tr>
</table>
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