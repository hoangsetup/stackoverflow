const app = require("express")();
const multer = require('multer');

const storageA = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storageA/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const storageB = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storageB/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const destA = multer({ storage: storageA });
const destB = multer({ storage: storageB });

function fileUpload(req, res, next) {
  destA.single('file')(req, res, next);
  destB.single('file')(req, res, next);
}

app.post("/", fileUpload, (req, res) => {
  res.json({ file: req.file });
});


app.listen(3000, () => {
  console.log("Server started");
});
