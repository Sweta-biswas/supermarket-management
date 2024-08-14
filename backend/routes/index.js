const express= require("express")
const productManager= require("./productManager")
const User= require("./User")
const Purchase= require("./Purchase")
const router= express.Router()
router.use("/productmanager",productManager)
router.use("/user",User)
router.use("/purchase",Purchase)
module.exports=router
