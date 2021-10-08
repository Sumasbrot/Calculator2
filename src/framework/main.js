/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functiuns to are used to interface with the rest of the application framework.
 * @author Vlad Sorokin
 * @date 2021/10/07
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

 var baseFileName = path.basename(module.filename, path.extname(module.filename));
 var namespacePrefix = `framework.${baseFileName}.`;

/**
 * @function initFramework
 * @description initializes the framework systems.
 * @param  {object} clientConfiguration A configuration data object that contains
 * all the data needed to bootstrap the framework for a client application.
 * @return {void}
 * @author Vlad Sorokin
 * @date 2021/10/07              [description]
 */
function initFramework(clientConfiguration) {
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);

  console.log(`END ${namespacePrefix}${functionName} function`);
}
