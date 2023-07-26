const express=require("express");



const router = express.Router();

const formHandler = require("../controllers/formHandler")
const allstudents = require("../controllers/allStudents")

router.get("/form",formHandler)
router.get("/allstudents",allstudents)

module.exports = router;