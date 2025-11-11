import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // مسیر پوشه‌ای که فایل‌ها ذخیره می‌شن (مثلاً ./uploads)
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    // نام فایلی که ذخیره می‌شه
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
