module.exports = {
  removeUnwantedPhrases: (titles, unwantedPhrases) => {
    unwantedPhrases.forEach(phrase => {
      titles = titles.toString().replace(phrase.toString(), '');
    });
    
    return titles;
  }
}