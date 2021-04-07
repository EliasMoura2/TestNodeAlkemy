const { Router } = require('express');
const movieCtrl = require('../controllers/movie');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const verifyToken = require('../middlewares/verifyToken');

const router = Router();

const storage = multer.diskStorage({
  destination : path.join(__dirname, '../public/img/movies'),
  filename (req, file,cb) {
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

router.get('/', verifyToken, movieCtrl.list);
router.get('/:id', verifyToken, movieCtrl.detail);
router.post('/', [verifyToken, upload, movieCtrl.new]);
router.put('/:id', [verifyToken, upload, movieCtrl.edit]);
router.delete('/:id', verifyToken, movieCtrl.delete);
router.get('/search/:title', verifyToken, movieCtrl.search);

module.exports = router;