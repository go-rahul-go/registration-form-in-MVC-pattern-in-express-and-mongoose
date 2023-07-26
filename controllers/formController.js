
const schoolDbConnector = require("../models/schoolDbConnector")

const formController = async (req, resp) => {
    try {
        let result = await schoolDbConnector();
        let data = new result({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: Number.parseInt(req.body.age),
            class: req.body.class

        })
        data = await data.save();
        resp.send(data)
    }
    catch(error)
    {
        console.log(error)
        resp.send("something went wrong");
    }
    
}


module.exports = formController;