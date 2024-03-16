// pages/api/sendMail.js
import nodeMail from "nodemailer";
import { useRouter } from "next/router";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const formData = JSON.parse(req.body)
  
  console.log(formData.yourname)
  console.log(formData.youremail)

  console.log(formData.yoursubject)
  console.log(formData.yourmessage)
  try {
    await mainMail(formData.yourname, formData.youremail, formData.yoursubject, formData.yourmessage);

    // const router = useRouter();
    console.log('success')
    // router.push('/');
    res.status(200).json({ message: "Message Sent Successfully!" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Message Could not be Sent" });
  }
}

async function mainMail(name: string, email: string, subject: string, message: string) {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: "senderemail60@gmail.com",
      pass: "qaukowczqzpgeqgp",
    }
  });
  const mailOption = {
    from: "senderemail60@gmail.com",
    to: "wodeshouji12@gmail.com",
    subject: subject,
    html: `You got a message from 
    Email : ${email}\n
    Name: ${name}\n
    Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}
