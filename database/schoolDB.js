const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/school"
async function schoolDb()
{
    return mongoose.connect(URL);
}


module.exports  = schoolDb;