const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const libs = require('../libs');

const TEMPLATES = {
    SERVICE: {
        src: 'service.service.ejs',
        target: 'service.service.js'
    },
    TEST: {
        src: 'service.service.test.ejs',
        target: 'service.service.test.js'
    }
}

const createService = (dir, name, error) => {
    const servicesDir = `${dir}/${name}`;
    fs.mkdir(
        servicesDir,
        { recursive: true },
        (err) => {
            if (err){
                error(err);
            } else {
                libs.generateTemplateFile(TEMPLATES.SERVICE.src, TEMPLATES.SERVICE.target, 'services', servicesDir, name, libs.templateNameToClassName(name), true);
                
                libs.generateTemplateFile(TEMPLATES.TEST.src, TEMPLATES.TEST.target, 'services', servicesDir, name, libs.templateNameToClassName(name), true);
            }
        }
    );
}

module.exports = createService;
