const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        default: 'John'
    },
    last_name: {
        type:String,
        default: 'Doe'
    },
    age: Number, 
    email: {
        type: String,
        required: true 
    }
})

const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;
