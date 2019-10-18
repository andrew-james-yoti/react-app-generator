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
                const values = {
                    name,
                    className: libs.templateNameToClassName(name)
                }

                libs.generateTemplateFile(
                    TEMPLATES.SERVICE.src,
                    libs.targetName(TEMPLATES.SERVICE.target, name),
                    'services',
                    servicesDir,
                    values,
                );
                
                libs.generateTemplateFile(
                    TEMPLATES.TEST.src,
                    libs.targetName(TEMPLATES.TEST.target, name),
                    'services',
                    servicesDir,
                    values,
                );
            }
        }
    );
}

module.exports = createService;
