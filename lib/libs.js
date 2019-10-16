const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const findCharAt = (char, str) => (str.split('').findIndex(strChar => strChar === char));
const getExt = (str) => {
    const extDelimiterIndex = findCharAt('.', str);
    return str.substring(extDelimiterIndex, str.length);
}

module.exports = {
    generateTemplateFile: (src, target, template, outDir, name, className, rename) => {
        // @TODO change params to opts
        const renderedTemplate = ejs.renderFile(path.resolve(__dirname, `${template}/templates/${src}`), { name, className });
        const targetFileName = rename ? `${name}${getExt(target)}` : target;
        renderedTemplate.then((output) => {
            fs.writeFile(
                `${outDir}/${targetFileName}`,
                output,
                (err) => {
                    if (err)
                        throw err;

                    console.log(chalk.green(`${targetFileName} created`));
                }
            );
        })
    },
    templateNameToClassName: (templateName) => (templateName.charAt(0).toUpperCase() + templateName.slice(1).replace(/-([a-z])/g, (x, up) => up.toUpperCase()))
}