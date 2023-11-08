const nodemailer = require('nodemailer');

module.exports = async (status, entreprise, email, domaine, telephone) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      service: 'gmail',
      auth: {
        user: 'aarenabusiness@gmail.com',
        pass: '',
      },
    });
    const mailOption = {
      from: 'aarenabusiness@gmail.com',
      to: 'contact@arenabusinesscenter.com',
      subject: `Demande information d'entreprise ${entreprise}`,
      text: `Bonjour, merci de trouver ci-dessous une requête d'information Client :
        status:  ${status},
        nom de l'entreprise: ${entreprise},
        email:${email},
        domaine:${domaine},
        telephone:${telephone}
      `,
    };
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.log(error);
  }
};
