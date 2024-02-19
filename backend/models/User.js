const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    following:{
        type: Array
    },

    followers: {
        type: Array
    },
    reviews: [{
        type: Schema.Types.ObjectId, 
        ref:"Review"
    }]
})

const User = mongoose.model("User", UserSchema)

module.exports = User