const { Router } = require('express');


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
  console.log('submit', req.body);
  res.json(req.body)
})

module.exports = router;
