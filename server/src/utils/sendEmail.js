import nodemailer from 'nodemailer';// email bhejne  ka kaam krta hai nodemailer

const sendEmail = async (to, subject, message) =>{
    try {
        const transporter = nodemailer.createTransport({ // transporter => Ye email bhejne ke liye Gmail ke server ka use karega.
            service: 'gmail',
            auth: { // authentication details (kaunse account se bhejna hai).
                user: process.env.GMAIL.USER,
                pass:process.env.GMAIL_PASSCODE, //Gmail ka App Password (normal password nahi chalega).
            },
        });

        const mailOptions = {
            from : process.env.GMAIL_USER,
            to, // kiske email par bhejna hai.
            subject,//email ka subject (title).
            html: message,//email ka content (HTML format).
        };

        await transporter.sendMail(mailOptions);//Ye line email ko actual me bhejti hai. await use hua hai kyunki ye asynchronous kaam hai.
        console.log('Email sent Successfully');
        return true;
        
    } catch (error) {
        console.log('Email not sent');
        return false;
    }
   
}

export default sendEmail;