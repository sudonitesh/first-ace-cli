const ora = require('ora');
const listr = require('listr');
const { Command } = require('@adonisjs/ace')

class RunTasks extends Command {

  static get signature () {//describe command itself and arguments with flash
     
    return `
        run-tasks
        `
    }
  
  static get description () {
    return 'loading list of async tasks animations in texts!!!'
  }
  
  async handle () {
    let tasks =  new listr([
        {
            title: 'starting pc',
            task: () => this.waitASecond()
                //wait a task
        },
        {
            title: 'starting vscode',
            task: () => this.waitASecond()
                //wait a task
        },
        // {
        //     title: 'setting package',
        //     task: () => this.waitASecond()
        //         //wait a task
        // }
        {
            title: 'setting package',
            task: () => {
                throw new Error('failed setting package just to see output ')
            }
        }
    ])

    tasks.run()
      
  }
  async waitASecond() {
      return new Promise(resolve => setTimeout(resolve, 2000))
  }

}

module.exports = RunTasks 