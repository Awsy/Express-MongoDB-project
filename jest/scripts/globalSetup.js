/* Global setup modle.
**
** This module exports an async function that is triggered
** once before all test suites.
**
*/

const chalk = require('chalk');

module.exports = async function() {
    console.log(chalk.green('λ'));
    global.t = 'hello';
};
