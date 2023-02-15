const User = require('../models/User');

const createUser = async(req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.about,
        password: req.body.about,

    });

    const result = await user.save();
    res.status(200).send(result);

}

module.exports = {
    createUser
}