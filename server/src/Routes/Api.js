const express= require('express')
const router= express.Router()
const testConroller= require('../Controllers/TestController') 
const UsersController= require('../Controllers/UsersController')



router.get("/test", testConroller.test)
router.post("/creatUser", UsersController.creatUser)






module.exports = router