/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functiuns to are used to interface with the rest of the application framework.
 * @requires module:warden
 * @requires {@link https://www.npmjs.com/package/path%7Cpath%7D
 * @author Vlad Sorokin
 * @date 2021/10/07
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import warden from './controllers/warden';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `framework.${baseFileName}.`;

/**
 * @function initFramework
 * @description initializes the framework systems.
 * @param {object} clientConfiguration A configuration data object that contains
 * all the data needed to bootstrap the framework for a client application.
 * @return {void}
 * @author Vlad Sorokin
 * @date 2021/10/07
 */
function initFramework(clientConfiguration) {
  let functionName = initFramework.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
  warden.processRootPath(clientConfiguration);
  console.log(`END ${namespacePrefix}${functionName} function`);
};

export default {
  initFramework
};
