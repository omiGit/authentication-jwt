const asyncCatch = require("../util/asyncCatch");

const auth = async (request, response, next)=>{
    console.log(x)
    res.status(200).json({message:"login"});
}

module.exports = asyncCatch(auth);