const { Router } = require('express');
const movieCtrl = require('../controllers/movie');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const storage = multer.diskStorage({
  destination : path.join(__dirname, '../public/img/movies'),
  filename (req, file,cb) {
    // + path.extname(file.originalname)
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

const upload = multer({
  storage,
  dest: path.join(__dirname, 'public/img/movies'),
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

router.get('/', movieCtrl.list);
router.get('/:id', movieCtrl.detail);
router.post('/', upload, movieCtrl.new);
router.put('/:id', upload, movieCtrl.edit);
router.delete('/:id', movieCtrl.delete);
router.get('/:name/:filter', movieCtrl.search);

module.exports = router;