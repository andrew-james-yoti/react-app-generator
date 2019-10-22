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
    generateTemplateFile: (src, target, template, outDir, values) => {
        const renderedTemplate = ejs.renderFile(path.resolve(__dirname, `${template}/templates/${src}`), values);
        renderedTemplate.then((output) => {
            fs.writeFile(
                `${outDir}/${target}`,
                output,
                (err) => {
                    if (err)
                        throw err;

                    console.log(chalk.green(`${target} created`));
                }
            );
        })
    },
    templateNameToClassName: (templateName) => (templateName.charAt(0).toUpperCase() + templateName.slice(1).replace(/-([a-z])/g, (x, up) => up.toUpperCase())),
    targetName: (target, name) => (`${name}${getExt(target)}`),
    // findCharAt,
}