// const dotenv = require('dotenv');
// const  connectDB = require('./config/db');
// dotenv.config();

// const User = require('./models/User');
// const Add = require('./models/Add');

// connectDB();

// async function createUser(name, email, password) {
//     const user = new User({
//         name,
//         email,
//         password
//     });


//     const result = await user.save();
//     console.log(result);
// }

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/ads', require('./routes/adRoutes.js'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

// createUser('Miau', 'miau@miau.lt', 'miaumiau123')
// createAdd('Usai', 'labai ilgi nauji usai')
