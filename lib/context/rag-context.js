const fs = require('fs');
const libs = require('../libs');
const TEMPLATES = {
    CONTEXT: {
        CONTEXT: {
            src: 'context.context.ejs',
            target: 'context.context.js'
        }
    },
    PROVIDER: {
        INDEX: {
            src: 'index.ejs',
            target: 'index.jsx'
        },
        PROVIDER: {
            src: 'provider.ejs',
            target: 'provider.jsx'
        }
    }
}

const createContext = (contextDir, providerDir, name, error) => {
    fs.mkdir(
        contextDir,
        { recursive: true },
        (err) => {
            if (err) {
                error(err);
            } else {
                const values = {
                    className: libs.templateNameToClassName(name)
                }
                libs.generateTemplateFile(
                    TEMPLATES.CONTEXT.CONTEXT.src,
                    libs.targetName(TEMPLATES.CONTEXT.CONTEXT.target, name),
                    'context/context',
                    contextDir,
                    values
                );
            }
        }
    );

    const _providerName = `${name}-context-provider`;
    const _providerDir = `${providerDir}/${_providerName}`;

    fs.mkdir(
        _providerDir,
        { recursive: true },
        (err) => {
            if (err) {
                error(err);
            } else {
                libs.generateTemplateFile(
                    TEMPLATES.PROVIDER.INDEX.src,
                    TEMPLATES.PROVIDER.INDEX.target,
                    'context/provider',
                    _providerDir,
                    {
                        name: _providerName,
                    }
                );
                libs.generateTemplateFile(
                    TEMPLATES.PROVIDER.PROVIDER.src,
                    libs.targetName(TEMPLATES.PROVIDER.PROVIDER.target, _providerName),
                    'context/provider',
                    _providerDir,
                    {
                        name,
                        className: libs.templateNameToClassName(name),
                        contextDir,
                        providerDir: _providerDir,
                    }
                );
            }
        }
    );
}

module.exports = createContext;
