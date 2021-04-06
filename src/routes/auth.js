const { Router } = require('express');
const authCtrl = require('../controllers/auth');

const router = Router();

router.post('/login', authCtrl.login);
router.post('/signup', authCtrl.signup);

module.exports = router;