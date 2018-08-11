const { Command } = require('@adonisjs/ace')

class Greet extends Command {

  static get signature () {//describe command itself and arguments with flash
     return 'hello'
  }
  
  static get description () {
    return 'print hello on comsole'
  }
  
  async handle () {
    console.log(`Hello nitesh`)
  }

}

module.exports = Greet 