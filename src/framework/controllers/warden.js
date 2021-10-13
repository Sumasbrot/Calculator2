/**
 * @file warden.js
 * @module warden
 * @description Contains all the function to entire application framework at the level.
 * Also  provides an interface to easily manageall the framework features & various functionality a single entry point.
 * @requires {@link https://www.npmjs.com/package/path%7Cpath%7D
 * @author Vlad Sorokin
 * @date 2021/10/07
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

 var path = require('path');
 var baseFileName = path.basename(module.filename, path.extname(module.filename));
 var namespacePrefix = `framework.cotrollers.${baseFileName}.`;

/**
 * @function processRootPath
 * @description Process the root path of the application using business rules.
 * @NOTE By calling path.resolve(__dirname); This does not return the true root path of the application.
 * which is: C:/Calculator2/Application/Calculator2/
 * But what we really need for the root path is just C:/Calculator2/
 * @param {object} configData All of the configuration data that should be parsed as part of the setur process.
 * @return {string} The true root path of the application.
 * @author Vlad Sorokin
 * @date 2021/10/12
 */
function processRootPath(configData) {
  let functionName = processRootPath.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${ JSON.strinify(configData)}`);

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  let applicationName = configData['applicationName'];
  let pathToProcess = configData['rootPath'];
  let resolvedPath = '';

  let pathElements = pathToProcess.split('\\');
  loop1:
    for (let i = 0; i < pathElements.length; i++) {
      let pathElement = pathElement[i];
      if (i === 0) {
        resolvedPath = pathElement
      } else if (pathElement === applicationName) {
        resolvedPath = resolvedPath + '\\' + pathElement + '\\';
        break loop1;
      } else {
        resolvedPath = resolvedPath + '\\' + pathElement;
      }
    }
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  let rootPath = path.resolve(resolvedPath);

  console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setur process.
 * @return {void}
 * @author Vlad Sorokin
 * @date 2021/10/12
 */
function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);

  console.log(`END ${namespacePrefix}${functionName} function`);
};

export default {
  processRootPath,
  initFrameworkSchema
};
