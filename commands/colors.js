const { Command } = require('@adonisjs/ace')
const chalk = require('chalk');

class Colors extends Command {

  static get signature () {//describe command itself and arguments with flash
     
    return `
        colorful
        `
    }
  
  static get description () {
    return 'colorful texts!!!'
  }
  
  async handle () {
     
     console.log(chalk.red('red text'));
     console.log(chalk.bgCyanBright('red background'));
     console.log(chalk.bgGreen('Hello world!'));
     console.log(chalk.magenta('Hello world!'));

     this.completed('create', 'completed.js')
     this.failed('create', 'failed.js')
      
  }

}

module.exports = Colors 