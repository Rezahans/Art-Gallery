const express = require('express'),
    controller = require('../controllers/artControllers'),
    router = express.Router(),
    multer = require('../middlewares/multer'),
    multerLib = require('multer')();

    router.post('/create', multer.image.single('image') , controller.create);
    router.post('/create-with-imagekit', multerLib.single('image') , controller.createWithImageKit);
    router.post('/upload', multerLib.single('image'), controller.upload);

    router.get('/art', controller.getAllArt);
    router.get('/art/:artId', controller.getArtById);
    router.put('/art/:artId', controller.update);
    router.delete('/art/:artId', controller.delete);
    module.exports = router;