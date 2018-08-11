const ace = require('@adonisjs/ace')
const chalk = require('chalk');

ace.addCommand(require('./commands/hello'))
ace.addCommand(require('./commands/package'))
ace.addCommand(require('./commands/ask'))
ace.addCommand(require('./commands/colors'))
ace.addCommand(require('./commands/icons'))
// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()