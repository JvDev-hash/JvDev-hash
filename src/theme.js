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
    primary: generateBaseAndOverColor('#660066'),
    secondary: generateBaseAndOverColor('#d580ff'),
    lightSecondary: generateBaseAndOverColor('#eabfff'),
    black: generateBaseAndOverColor(black),
    white: generateBaseAndOverColor(white),
  },
};
