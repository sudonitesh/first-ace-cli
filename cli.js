const ace = require('@adonisjs/ace')
const chalk = require('chalk');
const ora = require('ora');

ace.addCommand(require('./commands/hello'))
ace.addCommand(require('./commands/package'))
ace.addCommand(require('./commands/ask'))
ace.addCommand(require('./commands/colors'))
ace.addCommand(require('./commands/icons'))
ace.addCommand(require('./commands/load'))
// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()