const express = require('express');
const cors = require('cors');
const sendEmail = require('./sendEmail.js');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post('/api/sendEmail', async (req, res) => {
  try {
    const StatutSociete = req.body.StatutSociete;
    const entreprise = req.body.entreprise;
    const email = req.body.email;
    const domaine = req.body.domaine;
    const telephone = req.body.telephone;
    await sendEmail(StatutSociete, entreprise, email, domaine, telephone);
    res.status(200).send('Email send with succès');
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`the server is running at ${port}`);
});
