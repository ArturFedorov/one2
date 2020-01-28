const { Router } = require('express');
const emailConfig = require('../services/emailService');


const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

router.post('/submit', (req, res, next) => {
  const mailOptions = {
    to: req.body.email,
    subject: 'Joining One Second',
    html: emailConfig.generateMessageContent(
      'Joining One Second',
      'Have an amazing experience',
      req.body.name
    )
  };

  emailConfig.send(mailOptions)
    .then(() => res.json(req.body))
    .catch(() => res.status(500).send('Error occurred'));
})

module.exports = router;
