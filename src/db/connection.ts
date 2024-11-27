const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
//Puede que el uri sea diferente, dependiendo de la configuración de tu base de datos.
module.exports = ()=> mongoose.connect(uri);