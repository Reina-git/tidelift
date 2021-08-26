export function safelyParseJson(value) {
  try {
    JSON.parse(value);
  } catch {
    // if error return the original value
    return value;
  }
  return JSON.parse(value);
}

export function getKeyWordString(words) {
  return words.map((word, i, arr) => {
    // if you are not on the last word
    if (i < arr.length - 1) {
      return word + ", ";
    }
    //  on the last word in the array
    else return word;
  });
}
