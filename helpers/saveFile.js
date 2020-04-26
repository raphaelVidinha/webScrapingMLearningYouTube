const fs = require('fs');
const { formatPath, successFileCreated } = require('./formatMessages');
const constants = require('../constants/constants');

module.exports = {
  writeFile: (path, fileName, json) => {
    fs.writeFile(formatPath(path, fileName), json, constants.UTF8, (error) => {
      error ? console.log(error) : console.log(successFileCreated(fileName));
    }); 
  }
}