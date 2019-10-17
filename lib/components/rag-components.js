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
}

const createComponent = (dir, name, error) => {
    const componentDir = `${dir}/${name}`;
    fs.mkdir(
        componentDir,
        { recursive: true },
        (err) => {
            if (err){
                error(err);
            } else {
                libs.generateTemplateFile(TEMPLATES.INDEX.src, TEMPLATES.INDEX.target, 'components', componentDir, name, libs.templateNameToClassName(name));
                
                libs.generateTemplateFile(TEMPLATES.COMPONENT.src, TEMPLATES.COMPONENT.target, 'components', componentDir, name, libs.templateNameToClassName(name), true);

                libs.generateTemplateFile(TEMPLATES.STYLE.src, TEMPLATES.STYLE.target, 'components', componentDir, name, libs.templateNameToClassName(name), true);

                libs.generateTemplateFile(TEMPLATES.TEST.src, TEMPLATES.TEST.target, 'components', componentDir, name, libs.templateNameToClassName(name), true);
            }
        }
    );
}

module.exports = createComponent;
