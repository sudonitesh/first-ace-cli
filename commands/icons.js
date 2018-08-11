const { Command } = require('@adonisjs/ace')
const chalk = require('chalk');

class Icons extends Command {

  static get signature () {//describe command itself and arguments with flash
     
    return `
        icons
        `
    }
  
  static get description () {
    return 'icons in texts!!!'
  }
  
  async handle () {
     
     console.log(`${this.icon('success')} ace suppport icon and this is success`)
     console.log(`${this.icon('warn')} ace suppport icon and this is warn`)
     console.log(`${this.icon('info')} ace suppport icon and this is info`)

      
  }

}

module.exports = Icons 