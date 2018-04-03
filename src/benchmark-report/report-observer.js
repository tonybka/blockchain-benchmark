import { resolve } from 'path';

'use strict'


var path = require('path');

var ReportObserver = class {
    constructor(path, createdTime) {
        this.reportPath = path;
        this.time = createdTime
    }
    
    newReport() {
        return new Promise((resolve, reject) => {
            
        });
    }

}

module.exports = ReportComposer;