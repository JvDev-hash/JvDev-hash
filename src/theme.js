const { getColorBrightness } = require("./utils/getColorBrightness");

const black = '#121111';
const white = '#F2F2F2';

function generateBaseAndOverColor(color) {
  const brightnessThreshold = 0.69;

  return {
    base: color,
    over: getColorBrightness(color) <= brightnessThreshold ? white : black,
  }
}

module.exports = {
  colors: {
    primary: generateBaseAndOverColor('#5C2751'),
    secondary: generateBaseAndOverColor('#6457A6'),
    lightSecondary: generateBaseAndOverColor('#d580ff'),
    black: generateBaseAndOverColor(black),
    white: generateBaseAndOverColor(white),
  },
};
