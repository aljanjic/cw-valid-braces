function validBraces(str) {

  const braces = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
// pairOfBrackets[arrLeftBrackets.pop()]
  let leftBrackets = [];
  for (let i = 0; i < str.length; i ++){
    let char = str[i];
    if (Object.keys(braces).includes(char)){
      leftBrackets.push(char)
    } else {
      if (char !== braces[leftBrackets.pop()]){
        return false;
      } 
    }
  }

return !leftBrackets.length;






















  // const pairOfBrackets = {
  //   '(': ')',
  //   '[': ']',
  //   '{': '}',
  // };

  // let arrLeftBrackets = [];
  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (Object.keys(pairOfBrackets).includes(char)) {
  //     arrLeftBrackets.push(char);
  //   } else {
  //     if (char !== pairOfBrackets[arrLeftBrackets.pop()]) {
  //       return false;
  //     }
  //   }
  // }

  // return !arrLeftBrackets.length;
}

module.exports = validBraces;