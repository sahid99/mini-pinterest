"use strict";
const {authError, passwordError} = require("./errorTypes");

const errorBuilders = {};

errorBuilders.authErrorBuilder = class authErrorBuilder{
    constructor() {
        this.error = null;
    }
    
    step1(){
        this.error = new authError();
    };
    step2(){
        this.error.setMsg();
    };
    getError(){
        return this.error;
    }
}

errorBuilders.passwordErrorBuilder = class passwordErrorBuilder{
    constructor() {
        this.error = null;
    }
    
    step1(){
        this.error = new passwordError();
    };
    step2(){
        this.error.setMsg();
    };
    getError(){
        return this.error;
    }
}

module.exports = errorBuilders;