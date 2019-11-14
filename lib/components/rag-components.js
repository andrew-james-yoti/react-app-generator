const fs = require('fs');
const libs = require('../libs');
const TEMPLATES = {
    INDEX: {
        src: 'index.ejs',
        target: 'index.jsx'
    },
    COMPONENT: {
        src: 'component.ejs',
        target: 'component.jsx'
    },
    STYLE: {
        src: 'style.ejs',
        target: 'style.scss'
    },
    TEST: {
        src: 'component.test.ejs',
        target: 'component.test.jsx'
    }
};

const createComponent = (dir, name, error) => {
    const componentDir = `${dir}/${name}`;
    fs.mkdir(
        componentDir,
        { recursive: true },
        (err) => {
            if (err){
                error(err);
            } else {
                const values = {
                    name,
                    className: libs.templateNameToClassName(name)
                };

                libs.generateTemplateFile(
                    TEMPLATES.INDEX.src,
                    TEMPLATES.INDEX.target,
                    'components',
                    componentDir,
                    values
                );

                libs.generateTemplateFile(
                    TEMPLATES.COMPONENT.src,
                    libs.targetName(TEMPLATES.COMPONENT.target, name),
                    'components',
                    componentDir,
                    values
                );

                libs.generateTemplateFile(
                    TEMPLATES.STYLE.src,
                    libs.targetName(TEMPLATES.STYLE.target, name),
                    'components',
                    componentDir,
                    values
                );

                libs.generateTemplateFile(
                    TEMPLATES.TEST.src,
                    libs.targetName(TEMPLATES.TEST.target, name),
                    'components',
                    componentDir,
                    values
                );
            }
        }
    );
};

module.exports = createComponent;
