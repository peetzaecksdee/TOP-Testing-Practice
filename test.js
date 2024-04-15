function capitalize(string) {
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
    return String.fromCharCode(((char.charCodeAt(0) + shift - 97) % 26) + 97);
  }

  return String.fromCharCode(((char.charCodeAt(0) + shift - 65) % 26) + 65);
}

function caesarCipher(shift, string) {
  let res = "";
  for (const character of string) {
    res += shiftCharacter(shift, character);
  }
  return res;
}

export { capitalize, reverseString, calculator, caesarCipher }