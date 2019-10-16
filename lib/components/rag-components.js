// const chalk = require('chalk');
// const path = require('path');
const fs = require('fs');
// const ejs = require('ejs');
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
// 
// const findCharAt = (char, str) => (str.split('').findIndex(strChar => strChar === char));
// const getExt = (str) => {
//     const extDelimiterIndex = findCharAt('.', str);
//     return str.substring(extDelimiterIndex, str.length);
// }
// 
// const generateComponentFile = (template, componentDir, name, rename) => {
//     const renderedTemplate = ejs.renderFile(path.resolve(__dirname, `templates/${TEMPLATES[template].src}`), { name });
//     const targetFileName = rename ? `${name}${getExt(TEMPLATES[template].target)}` : TEMPLATES[template].target;
//     renderedTemplate.then((output) => {
//         fs.writeFile(
//             `${componentDir}/${targetFileName}`,
//             output,
//             (err) => {
//                 if (err)
//                     throw err;
// 
//                 console.log(chalk.green(`${targetFileName} created`));
//             }
//         );
//     })
// }

module.exports = createComponent;
