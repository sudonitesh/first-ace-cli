const ora = require('ora');
const { Command } = require('@adonisjs/ace')

class Load extends Command {

  static get signature () {//describe command itself and arguments with flash
     
    return `
        load
        `
    }
  
  static get description () {
    return 'loading animations in texts!!!'
  }
  
  async handle () {
     
    let spinner = ora(' loading caffeine ')
    spinner.start()

    //wait a second
    await this.waitASecond()
    // spinner.color = 'magenta'
    spinner.text = 'starting pc'

    //wait a second
    await this.waitASecond()
    // spinner.color = 'yellow'
    spinner.text = 'starting vscode'

    //wait a second
    await this.waitASecond()
    // spinner.color = 'orange'
    spinner.text = 'setting package'

    //wait a second
    await this.waitASecond()
    spinner.succeed('coded!!')
      
  }
  async waitASecond() {
      return new Promise(resolve => setTimeout(resolve, 2000))
  }

}

module.exports = Load 