const express=require("express")

const router=express.Router();

const fromController=require("../controllers/formController")

router.post("/form-submit",fromController);  //to submit the form

module.exports = router;