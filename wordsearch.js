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

const wordSearch = (letters, word) => { 
    const reversedWord = word.split('').reverse().join('');
    if (letters.length === 0) {
        return false;
    }
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversedWord)) return true;
    } for (l of verticalJoin) {
        if (l.includes(word) || l.includes(reversedWord)) return true
    }
    return false;
}

module.exports = wordSearch