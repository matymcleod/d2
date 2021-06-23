let args = process.argv.slice(2);
let input = args.toString();

const obfuscate = function(param) {
  let newPass = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'a') {
      newPass += '4';
    } else if (param[i] === 'o') {
      newPass += '0';
    } else if (param[i] === 'i') {
      newPass += '1';
    } else if (param[i] === 'e') {
      newPass += '3';
    } else {
      newPass += param[i];
    }
  }
  return newPass;
};
console.log(obfuscate(input));

