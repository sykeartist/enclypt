
const UsersModels= require("../Models/UsersModels")


// simple create
exports.creatUser= async(req, res)=>{
    const data= req.body
    try{
        const result = await UsersModels.create(data)
        res.status(200).json({status:"success", message:"user cresated successfully", data: result})
    }
    catch(error){
        res.status(404).json({status:"failed", message: error.message})
    }
}