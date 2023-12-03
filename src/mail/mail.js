import nodemailer from 'nodemailer';
const Send_Mail=async(val)=>{
   

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "64cc35dd222d3a",
      pass: "bc23cf36478837"
    }
  });

const mailOptions = {
  from: 'Shahzaib156@gmail.com',
  to: val.to,
  subject: 'Welcome New User!',
  text: `Hello ${val.name} good to have you!`,
};
console.log(val.name)

// Send the email
  transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
}

export default Send_Mail;