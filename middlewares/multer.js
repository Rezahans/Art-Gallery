const multer = require('multer');
const path = require('path');

const filename = (req, file, callback) => {
    const fileName = Date.now() + '-' + file.originalname;
    callback(null, fileName);
};

const generateStore = (destination) => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, destination);
        },
        filename,
    });
};

module.exports = {
    image: multer({
        storage: generateStore('./public/images'),
        fileFilter: (req, file, callback) => {
            const allowed = ['image/png', 'image/jpg', 'image/jpeg'];

            if (allowed.includes(file.mimetype)) {
                callback(null, true);
            } else {
                callback(new Error(`Only ${allowed.join(', ')} are allowed to upload`), false);
            }
        },
        onError: (err, next) => {
            next(err);
        },
    }),
};
