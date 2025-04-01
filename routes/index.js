const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  res.json({ message: 'Index page' });
});

router.use('/pictures', require('./pictures'));

module.exports = router;
