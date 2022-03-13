const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );
const UploadImage = require('../schemas/UploadImage')

const { response } = require('express');
const { uploadImg } = require('../helpers/upload-img');

const cargarArchivo = async(req, res = response) => {

    try {
        
        // txt, md
        // const nombre = await subirArchivo( req.files, ['txt','md'], 'textos' );
        const nombre = await uploadImg( req.files, undefined, 'imgs' );
        const image = new UploadImage({ image: req.files })
        image.save()
        res.status(200).json({ nombre, image });

    } catch (error) {
        res.status(400).json({ msg: error });
    }

}

module.exports = {cargarArchivo};