const express=require("express")
const postHandler=require("../controller/postController")
const router=express.Router()

router.route("/").post(postHandler.createPost)

module.exports=router