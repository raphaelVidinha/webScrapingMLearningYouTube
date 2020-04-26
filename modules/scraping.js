const cheerio = require('cheerio');
const request = require('request');
const { clean, deleteLines } = require('../helpers/stringHelper');
const { removeUnwantedPhrases } = require('../helpers/titlesHelper');

const constants = require('../constants/constants');

const scraping = () => {
  request({
    method: constants.METHOD,
    url: constants.URL
  }, (error, response, body) => {
    if (error) return console.error(error);
    const $ = cheerio.load(body);
    const titles = $('a').text();
    const titlesClean = clean(removeUnwantedPhrases(titles, constants.UNWANTED_PHRASES));
    const finalTitles = deleteLines(titlesClean);

    console.log(finalTitles);
  });
}

module.exports = scraping;