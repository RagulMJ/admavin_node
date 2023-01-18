let flatten = (arr) => arr.reduce((carry, item) => carry.concat(item), []);

let getAllWords = (wordLength, input) => {
  let alphabet = input.split('');
  let lengthen = (word) => alphabet.map((letter) => word + letter);
  let addLetters = (words) => flatten(words.map(lengthen));
  let _getAllWords = (letters, words = alphabet, current = 1) => {
    return letters == current
      ? words
      : _getAllWords(letters, addLetters(words), current + 1);
  };

  return _getAllWords(wordLength);
};

console.log(getAllWords(3, '123'));
