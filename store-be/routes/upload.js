const router = require('express').Router();
const { validarArchivoSubir } = require('../middlewares/validate-img')
// const { uploadImg } = require('../helpers/upload-img')
const { cargarArchivo } = require('../controllers/upload')

// router.post('/',  cargarArchivo)
router.post('/', async(req,  res)=>{

    !req.files && res.status(500).json({message: "failed"})
    res.status(200).json({message: "It's OK"})
})

module.exports = router;