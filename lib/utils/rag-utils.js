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

const createUtil = (utilsDir, name, error) => {
    fs.mkdir(
        utilsDir,
        { recursive: true },
        (err) => {
            if (err){
                error(err);
            } else {
                const values = {
                    name,
                    className: libs.templateNameToClassName(name)
                }

                libs.generateTemplateFile(
                    TEMPLATES.UTIL.src, 
                    libs.targetName(TEMPLATES.UTIL.target, name),
                    'utils',
                    utilsDir,
                    values,
                );
                
                libs.generateTemplateFile(
                    TEMPLATES.TEST.src,
                    libs.targetName(TEMPLATES.TEST.target, name),
                    'utils',
                    utilsDir,
                    values,
                );
            }
        }
    );
}

module.exports = createUtil;
