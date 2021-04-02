const { Router } = require('express');
const characterCtrl = require('../controllers/character');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const storage = multer.diskStorage({
  destination : path.join(__dirname, '../public/img/characters'),
  filename (req, file,cb) {
    // + path.extname(file.originalname)
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

const upload = multer({
  storage,
  dest: path.join(__dirname, 'public/img/characters'),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if(mimetype && extname){
      return cb(null, true)
    }
    cb("Error: The file must be an image");
  }
}).single('image');

router.get('/', characterCtrl.list);
router.get('/:id', characterCtrl.detail);
router.post('/', upload, characterCtrl.new);
router.patch('/:id', upload, characterCtrl.edit);
router.delete('/:id', characterCtrl.delete);
router.get('/prueba/:id', characterCtrl.search);

module.exports = router;