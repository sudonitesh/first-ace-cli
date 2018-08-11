const ace = require('@adonisjs/ace')

ace.addCommand(require('./commands/hello'))
ace.addCommand(require('./commands/package'))
ace.addCommand(require('./commands/ask'))
// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()