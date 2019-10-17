#!/usr/bin/env node
const program = require('commander');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const components = require('../lib/components/rag-components');
const services = require('../lib/services/rag-services');

const APP_NAME = 'rag';
const appCfg = require('rc')(APP_NAME, {
    structure: {
        app: {
            root: './src',
            components: 'components',
            services: 'services',
            utils: 'utils',
            enum: 'enum',
            hooks: 'hooks'
        }
    }
});

/*** RAG ***/
clear();
console.log(
    chalk.yellow(
        figlet.textSync('RAG', {
            kerning: 'fitted'
        })
    )
);

/*** Generate App ***/
program
.command('init <dir>')
.option('-a, --option-a', 'output from option a')
.action((dir, cmdObj) => {
    // Generate project scaffold
    console.log('Generate project scaffold');
});


program
.option('-c, --component <name>', 'create component')
.option('-s, --service <name>', 'create service')
.option('-u, --util <name>', 'create util')
.option('-e, --enum <name>', 'create enum')
.option('-h, --hook <name>', 'create hook');

program.parse(process.argv);

/*** Generate Components ***/
if (program.component) {
    const { structure: { app } } = appCfg;
    const componentPath = `${app.root}/${app.components}`;
    components(componentPath, program.component, (err) => {
        if (err) {
            console.error(chalk.red(err.message));
            console.warn(chalk.yellow('ensure you\'re using node version 10+'));
        }
    });
}
/*** Generate Service ***/
if (program.service) {
    const { structure: { app } } = appCfg;
    const servicesPath = `${app.root}/${app.services}`;
    services(servicesPath, program.service, (err) => {
        if (err) {
            console.error(chalk.red(err.message));
            console.warn(chalk.yellow('ensure you\'re using node version 10+'));
        }
    });
}

/*** Generate Utils ***/
if (program.util) {
    
}


/*** Generate Enum ***/
if (program.enum) {
    
}


/*** Generate Hooks ***/
if (program.hook) {
    
}

