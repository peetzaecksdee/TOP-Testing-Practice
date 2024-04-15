// Fixes the negative modulo
function mod(n, m) {
  return ((n % m) + m) % m;
}

function capitalize(string) {
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  return Array
    .from(string)
    .reverse()
    .join('');
}

const calculator = {
  add(a, b) { return a + b },
  subtract(a, b) { return a - b },
  multiply(a, b) { return a * b },
  divide(a, b) { return a / b },
}

function isCharacter(char) {
  return char.length === 1 && char.match(/[a-z]/i);
}

function shiftCharacter(shift, char) {
  if (!isCharacter(char)) {
    return char;
  }

  // check if it is lowercase
  // 96 is the starting unicode for lowercase
  if (char.charCodeAt(0) > 96) {
    return String.fromCharCode(mod((char.charCodeAt(0) + shift - 97), 26) + 97);
  }

  return String.fromCharCode(mod((char.charCodeAt(0) + shift - 65), 26) + 65);
}

function caesarCipher(shift, string) {
  let res = "";
  for (const character of string) {
    res += shiftCharacter(shift, character);
  }
  return res;
}

function analyzeArray(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  // const min = arr.reduce((a, b) => a < b ? a : b, 0);
  // const max = arr.reduce((a, b) => a > b ? a : b, 0);
  const sortedArr = arr.sort((a, b) => a - b);
  return {
    average: avg || 0,
    min: sortedArr[0] || 0,
    max: sortedArr[arr.length - 1] || 0,
    length: arr.length || 0,
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }