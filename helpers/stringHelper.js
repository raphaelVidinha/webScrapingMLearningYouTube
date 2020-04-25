module.exports = {
  clean: (lines) => {
    return lines.split('\n');
  },
  deleteLines: (lines) => {
    const dellLines = lines.filter(line => {
      if(line.trim().length === 0 || line.trim().startswith('=')) {
        return false;
      }
    });
    return dellLines;
  }
}