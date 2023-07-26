const schooldbConnector=require("../models/schoolDbConnector");




const allStudents = async(req,resp)=>{
    let result = await schooldbConnector();
    let data = await result.find(req.query);
    resp.send(data);
}


module.exports = allStudents;