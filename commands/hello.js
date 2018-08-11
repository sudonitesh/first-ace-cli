const { Command } = require('@adonisjs/ace')

class Greet extends Command {

  static get signature () {//describe command itself and arguments with flash
     return `
      hello
      { -f, --friendly: say a friendly greeting :)}
      { -g, --grumpy-friendly: say a friendly greeting :()}
     `
  }
  
  static get description () {
    return 'print hello on comsole'
  }
  
  async handle (args, { friendly, grumpyFriendly }) {
    console.log(`Hello ${friendly ? 'friendly' : ""} Nitesh ${grumpyFriendly ? ':(' : ''} `)
  }

}

module.exports = Greet 