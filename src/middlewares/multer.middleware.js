import multer from "multer";

const storage = multer.diskStorage({
  // cb is callback
  // cb(null, destination) => null is error, destination is the path where the file will be stored
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // orignalname should not be used because it will overwrite files with the same name
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
