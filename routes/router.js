const express = require('express'),
    controller = require('../controllers/artControllers'),
    router = express.Router(),
    multerLib = require('multer')();

    router.post('/create-with-imagekit', multerLib.single('image') , controller.createWithImageKit);
    router.get('/art', controller.getAllArt);
    router.get('/art/:artId', controller.getArtById);
    router.put('/art/:artId', controller.update);
    router.delete('/art/:artId', controller.delete);
    module.exports = router;