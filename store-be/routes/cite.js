const router = require('express').Router();
const Cite = require('../schemas/Cite');

router.post('/cite', async(req, res)=> {
    !req.body && res.status(404).json({message: 'Failed data', status: 500})

    try {
        const cite = new Cite(req.body)
        cite.save();
        res.status(200).json({message: "Data saved successfully", data: cite})
    } catch (error) {
        res.status(500).json({message: "Dont saved cite"})
    }
})


module.exports = router;