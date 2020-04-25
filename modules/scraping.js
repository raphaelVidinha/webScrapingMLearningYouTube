const cheerio = require('cheerio');
const request = require('request');
const { clean, deleteLines } = require('../helpers/stringHelper');

const constants = require('../constants/constants');

const scraping = () => {
  request({
    method: constants.METHOD,
    url: constants.URL
  }, (error, response, body) => {
    if (error) return console.error(error);
    const $ = cheerio.load(body);
    const titles = clean($('a').text());
    const titlesClean = deleteLines(titles);

    console.log(titlesClean);
  });
}
scraping();