"use strict";

const errorTypes = {}

errorTypes.authError = class authError{
    constructor (){
        this.error = {
            msg: {},
            status: "",
            id: ""
            
        };
    }
    
    setMsg(){
        this.error.msg = "Error while trying to authenticate";
        this.error.status = "In auth error";
        this.error.id = "AUTH_ERROR";  
    }
}

errorTypes.passwordError = class passwordError{
    constructor (){
        this.error = {
            msg: {},
            status: "",
            id: ""
            
        };
    }
    
    setMsg(){
        this.error.msg = "Incorrect password!";
        this.error.status = "In match error";
        this.error.id = "AUTH_ERROR";  
    }
}

module.exports = errorTypes;