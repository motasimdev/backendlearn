const nodemailer = require("nodemailer");

async function nodemailerFn() {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: "themotasimdev@gmail.com",
      pass: "isvfazqgpsdhexmi",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"mern2407" <themotasimdev@gmail.com>', // sender address
      to: "alice@example.com, bob@example.com", // list of recipients
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