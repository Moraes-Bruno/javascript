const words = ["apple", "orange", "banana", "kiwi", "pineapple"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}

console.log(longWords);
console.log(shortWords);
