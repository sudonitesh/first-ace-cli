const { Command } = require('@adonisjs/ace')

class Greet extends Command {

  static get signature () {//describe command itself and arguments with flash
     return `
      hello
      {name?=Stranger: greet your personal name} 
      { -f, --friendly: say a friendly greeting :)}
      { -g, --grumpy-friendly: say a friendly greeting :()}
     `
     //'?' i name to make it optional
  }
  
  static get description () {
    return 'print hello on comsole'
  }
  
  async handle ({ name }, { friendly, grumpyFriendly }) {
    console.log(`Hello ${friendly ? 'friendly' : ""} ${name} ${grumpyFriendly ? ':(' : ''} `)
  }

}

module.exports = Greet 