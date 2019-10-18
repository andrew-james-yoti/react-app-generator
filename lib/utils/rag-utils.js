const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const libs = require('../libs');

const TEMPLATES = {
    UTIL: {
        src: 'utils.utils.ejs',
        target: 'utils.utils.js'
    },
    TEST: {
        src: 'utils.utils.test.ejs',
        target: 'utils.utils.test.js'
    }
}

const createUtil = (dir, name, error) => {
    const utilsDir = `${dir}/${name}`;
    fs.mkdir(
        utilsDir,
        { recursive: true },
        (err) => {
            if (err){
                error(err);
            } else {
                libs.generateTemplateFile(TEMPLATES.UTIL.src, TEMPLATES.UTIL.target, 'utils', utilsDir, name, libs.templateNameToClassName(name), true);
                
                libs.generateTemplateFile(TEMPLATES.TEST.src, TEMPLATES.TEST.target, 'utils', utilsDir, name, libs.templateNameToClassName(name), true);
            }
        }
    );
}

module.exports = createUtil;
