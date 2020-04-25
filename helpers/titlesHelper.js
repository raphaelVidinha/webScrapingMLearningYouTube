module.exports = {
  removeUnwantedPhrases: (titles, unwantedPhrases) => {
    for(let i = 0; i <= (unwantedPhrases.length - 1); i++) {
      titles = titles.toString().replace(unwantedPhrases[i].toString(), '');
    }
    return titles;
  }
}