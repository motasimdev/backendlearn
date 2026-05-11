const nodemailer = require("nodemailer");

async function nodemailerFn(email) {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: "themotasimdev@gmail.com",
      pass: "bjdgvzxmjzklhxcn",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"MotasimBillah" <themotasimdev@gmail.com>', // sender address
      to: email, // list of recipients
      subject: "Hello", // subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}

module.exports = nodemailerFn