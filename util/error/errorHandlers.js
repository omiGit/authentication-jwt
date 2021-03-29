const AppError = require("./appError");

exports.handleCasteErrorDB = (error, response)=>{
    const message = `Invalid ${error.path}: ${error.value}`;
    return new AppError(message,400);
}

exports. handleDuplicateFieldErrorDB = (error, response)=>{
    const duplicateValue = error.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/);
    const messge = `Duplicate field value: ${duplicateValue}`;
    return new AppError(message, 400);
}

