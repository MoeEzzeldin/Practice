const sendMessage = message => {
  console.log(message);
  // Start typing here
  let result = ""
  let previousGlyph = ""
  let isStringPositionCurrentlyCapitalized = false;
  let wasPreviousPositionCapitalized = false;
  Array.from(message).forEach(glyph => {
    isStringPositionCurrentlyCapitalized = glyph !== glyph.toLowerCase() || (glyph === glyph.toUpperCase() && wasPreviousPositionCapitalized);
    result += addHashOnCapitalizationChange(wasPreviousPositionCapitalized, isStringPositionCurrentlyCapitalized);
    let doesGlyphNumericTypeMatch = isNaN(previousGlyph) === isNaN(glyph)
    if(result[result.length - 1] !== "#" && result[result.length - 1] !== "-") {
      result += addSpaceIfRepeatedButton(previousGlyph, glyph.toLowerCase());
    }
    result += charMap[glyph.toLowerCase()];

    wasPreviousPositionCapitalized = isStringPositionCurrentlyCapitalized;
    previousGlyph = glyph.toLowerCase();
    console.log("result:", result)
  });
  return result;
}

const addHashOnCapitalizationChange = (wasCapitalized, isCapitalized) => {
  let result = "";
  if(!wasCapitalized && isCapitalized) {
    result = "#"
  }
    if(wasCapitalized && !isCapitalized) {
    result = "#"
  }
  return result;
}

const addSpaceIfRepeatedButton = (previousGlyph, glyph) => {
  if(previousGlyph.length > 0){
        console.log("glyph:", glyph)

      return charMap[previousGlyph].includes(charMap[glyph][0]) ? " " : "";
  }
  return "";
}

const charMap = {
  '.': '1',
  ',': '11',
  '?': '111',
  '!': '1111',
  'a': '2',
  'b': '22',
  'c': '222',
  'd': '3',
  'e': '33',
  'f': '333',
  'g': '4',
  'h': '44',
  'i': '444',
  'j': '5',
  'k': '55',
  'l': '555',
  'm': '6',
  'n': '66',
  'o': '666',
  'p': '7',
  'q': '77',
  'r': '777',
  's': '7777',
  't': '8',
  'u': '88',
  'v': '888',
  'w': '9',
  'x': '99',
  'y': '999',
  'z': '9999',
  "'": '*',
  '-': '**',
  '+': '***',
  '=': '****',
  ' ': '0',
  '0': '0-',
  '1': '1-',
  '2': '2-',
  '3': '3-',
  '4': '4-',
  '5': '5-',
  '6': '6-',
  '7': '7-',
  '8': '8-',
  '9': '9-',
  '#': '#-',
  '*': '*-'
};
Solution by https://github.com/trevorbennett. Thanks for working on it with me \M/
