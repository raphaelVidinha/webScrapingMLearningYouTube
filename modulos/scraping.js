const cheerio = require('cheerio');
const request = require('request');

const constants = require('../constants/constants');

const scraping = () => {
  request({
    method: constants.METHOD,
    url: constants.URL
  }, (error, response, body) => {
    if (error) return console.error(error);
    const $ = cheerio.load(body);
    const title = $('a').text();
    console.log(title);
  });
}
scraping();