const ace = require('@adonisjs/ace')

ace.addCommand(require('./commands/hello'))
ace.addCommand(require('./commands/package'))
// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()