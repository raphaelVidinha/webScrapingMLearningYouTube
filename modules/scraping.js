const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const analyzePhrase = require('./training');
const { clean, deleteLines } = require('../helpers/stringHelper');
const { removeUnwantedPhrases } = require('../helpers/titlesHelper');
const { writeFile } = require('../helpers/saveFile');
const { verifyPath } = require('../helpers/path');

const constants = require('../constants/constants');

const scraping = () => {
  return request({
    method: constants.METHOD,
    url: constants.URL
  }, (error, response, body) => {
    if (error) return console.error(error);
    const $ = cheerio.load(body);
    const titles = $('a').text();
    const titlesClean = clean(removeUnwantedPhrases(titles, constants.UNWANTED_PHRASES));
    const finalTitles = deleteLines(titlesClean);

    const phrases = [];

    finalTitles.map(title => {
      phrases.push(analyzePhrase(title));
    });

    verifyPath(constants.PATH);
    const json = JSON.stringify(phrases, null, 2);
    const fileName = constants.NAME_FILE;
    writeFile(constants.PATH, fileName, json);
    
  });
}

module.exports = scraping;