const transpose = function(matrix) {
  let array = [];
  for (let y = 0; y < matrix[0].length; y++) {
    array.push([]);
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      array[x][y] = matrix[y][x];
    }
  } return array;
};

const diagonal = function(array) {
  let newArray = [];
  let Ylength = array.length;
  let Xlength = array[0].length;
  let maxLength = Math.max(Xlength, Ylength);
  let row;
  for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
    row = [];
    for (let y = Ylength - 1; y >= 0; --y) {
      let x = k - y;
      if (x >= 0 && x < Xlength) {
        row.push(array[y][x]);
      }
    } if (row.length > 0) {
         newArray += row.join('') + " ";
    }
  }
  return newArray.split(" ");
};


const wordSearch = (letters, word) => {
  const reversedWord = word.split('').reverse().join('');
  if (letters.length === 0) {
    return false;
  }
  const transposedLetters = transpose(letters);
  const diagonalLetters = diagonal(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  } for (l of verticalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }
  for (l of diagonalLetters) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }
  return false;
};


module.exports = wordSearch;




