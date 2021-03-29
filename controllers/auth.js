const asyncCatch = require("../util/asyncCatch");

const auth = async (request, response, next)=>{
    res.status(200).json({message:"login"});
}

module.exports = asyncCatch(auth);