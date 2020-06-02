"use strict";

class errorDispatcher{
    construct (builder) {
        builder.step1();
        builder.step2();
        return builder.getError();
    }
}

module.exports = errorDispatcher;