const { Router } = require('express');
const movie = require('../controllers/movie');
const movieCtrl = require('../controllers/movie')

const router = Router();

router.get('/', movieCtrl.list);
router.get('/:id', movieCtrl.detail);
router.post('/', movieCtrl.new);
router.patch('/:id', movieCtrl.edit);
router.delete('/:id', movieCtrl.delete);
router.get('/:name/:filter', movieCtrl.search);

module.exports = router;