const Ad = require('../models/Ad');

const createAd = async (req, res) => {
    if(!req.body.name || !req.body.author){ 
        res.status(404).send("Not found")}

        const ad = await Ad.create({
            name: req.body.name,
            author: req.body.author,
       })
        res.status(200).json(ad)
}

const getAds = async (req, res) => {
    
    const ad = await Ad
    .find()
    .populate('author', 'name about -_id')

        if(!ad) {res.status(404).send("Not found")}
        else {
            res.status(200).json(ad)
        }      

}
module.exports = {
    createAd,
    getAds
}