const { Command } = require('@adonisjs/ace')

class Greet extends Command {

  static get signature () {//describe command itself and arguments with flash
     
    return `
        ask
        `
    }
  
  static get description () {
    return 'ask user for input'
  }
  
  async handle () {
      let input = await this.ask('name: ', 'Stranger');//default
      console.log(input);

      const confirm = await this.confirm('do u want another shitty question? ', {default: false})
      console.log(confirm)

      if(confirm) {
        let anotherQ = await this.confirm('this is another question: want more? ', {default: false})
        console.log(anotherQ);
        if(anotherQ) {
            console.log('fuck off');
        } else {
            console.log('coool');
        }
      }
  }

}

module.exports = Greet 