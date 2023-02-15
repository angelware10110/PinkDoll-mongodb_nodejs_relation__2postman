const dotenv = require('dotenv');
const  connectDB = require('./config/db');
dotenv.config();

const User = require('./models/User');
const Add = require('./models/Add');

connectDB();

async function createUser(name, email, password) {
    const user = new User({
        name,
        email,
        password
    });


    const result = await user.save();
    console.log(result);
}

createUser('Miau', 'miau@miau.lt', 'miaumiau123')

createAdd('Usai', 'labai ilgi nauji usai')