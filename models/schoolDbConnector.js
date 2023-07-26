const mongoose = require("mongoose");
const schoolDb = require("../database/schoolDB")

let _schema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    class:{type:String,required:true},
    
})

async function insertData(){
    await schoolDb();
    return await mongoose.model("students",_schema);

}


module.exports = insertData;