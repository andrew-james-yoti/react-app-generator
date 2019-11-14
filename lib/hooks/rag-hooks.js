const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const libs = require('../libs');

const TEMPLATES = {
    INDEX: {
        src: 'index.ejs',
        target: 'index.jsx'
    },
    HOOKS: {
        src: 'hooks.ejs',
        target: 'hooks.jsx'
    },
    TEST: {
        src: 'hooks.test.ejs',
        target: 'hooks.test.jsx'
    },
};

const createHooks = (hooksDir, name, error) => {
    fs.mkdir(
        hooksDir,
        { recursive: true },
        (err) => {
            if (err) {
                error(err);
            } else {
                const values = {
                    name,
                    className: libs.templateNameToClassName(name)
                };

                libs.generateTemplateFile(
                    TEMPLATES.INDEX.src,
                    TEMPLATES.INDEX.target,
                    'hooks',
                    hooksDir,
                    values,
                );
            }
        }
    )
};
