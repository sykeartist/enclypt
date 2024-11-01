

const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            required:true,
        },
        password: {
            type: String,
            required:true,
        },
        phone: {
            type: Number,
            required:true,
        },
        address: {
            type: String,
            required:true,
        },
        age: {
            type: Number,
            required: true,
            validate: {
                validator: function(value){
                    return value >18 && value<35
                },
                message:"age muste be between 18 and 35"
            },
        },
        Gender: String,
    },
    {
        versionKey:false
    }
)


const UsersModels= mongoose.model("users", userSchema)




// simple create







module.exports= UsersModels