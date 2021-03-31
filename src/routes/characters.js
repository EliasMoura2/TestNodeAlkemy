const { Router } = require('express');
const authCtrl = require('../controllers/auth')

const router = Router();

router.get('/login', authCtrl.login);
router.get('/signup', authCtrl.signup);

module.exports = router;