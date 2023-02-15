const Course = require('../models/Add');

const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.user){ 
        res.status(404).send("Not found")}

        const app = await app.create({
            name: req.body.name,
            description: req.body.name,
            User: req.body.name
        })
        res.status(200).json(course)
}

const getAdds = async (req, res) => {
    
    const adds = await Add
    .find()
    .populate('name', 'name about -_id')

        if(!adds) {res.status(404).send("Not found")}
        else {
            res.status(200).json(adds)
        }      

}
module.exports = {
    createAdd,
    getAdds
}

