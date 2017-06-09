'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const shell = require('shelljs')
const dir = require('node-dir');
const _ = require('lodash');;

module.exports = class extends Generator {
  initializing() {

    this.log(yosay(
      `Welcome to the ${chalk.red('accelerate-flow')} generator!`
    ));

  }

  writing() {
    const templatePath = this.templatePath()
    const destinationPath = this.destinationPath()
    
      this.fs.copyTpl(
        `${templatePath}/action.js`,
        `${destinationPath}/action.js`
      );
      this.fs.copyTpl(
        `${templatePath}/flow.js`,
        `${destinationPath}/flow.js`
      );
      this.fs.copyTpl(
        `${templatePath}/index.js`,
        `${destinationPath}/index.js`
      );
      this.fs.copyTpl(
        `${templatePath}/node.js`,
        `${destinationPath}/node.js`
      );
      this.fs.copyTpl(
        `${templatePath}/register.js`,
        `${destinationPath}/register.js`
      );
  }

}
