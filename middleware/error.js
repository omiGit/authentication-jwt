const { handleCasteErrorDB, handleDuplicateFieldErrorDB } = require("../util/error/errorHandlers");
const { sendProductionError, sendDevelopmentError } = require("../util/error/sendErrorResponse");

module.exports = (error,request, response, next)=>{
    const { DEPLOYMENT } = process.env;
    if(DEPLOYMENT === "production"){
        sendProductionError(error, response);
    }else{
        if(error.name === 'CastError'){
            error = handleCasteErrorDB(error);
        }
        if(error.code === 11000 ){
            error = handleDuplicateFieldErrorDB(error);
        }
        sendDevelopmentError(error, response);
    }
    
}