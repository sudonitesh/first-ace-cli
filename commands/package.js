const { Command } = require('@adonisjs/ace')
const fs = require('fs');
class Greet extends Command {

  static get signature () {//describe command itself and arguments with flash
     return 'package'
  }
  
  static get description () {
    return 'print contents of package.json file  on comsole'
  }
  
  async handle () {
        const pkg = fs.readFileSync('package.json') //not "../package.json" because it is located beside cli.js
        console.log(pkg.toString())
    }

}

module.exports = Greet 