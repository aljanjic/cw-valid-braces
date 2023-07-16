function validBraces(str) {



const braces = {
  '(': ')',
  '[': ']',
  '{': '}'
}

console.log('Braces test: ', braces[')'])

const validBraces = [];

for(let i = 0; i < str.length; i++){
  if (Object.keys(braces).includes(str[i])) {
    validBraces.push(str[i])
    console.log('Right side: ', str[i], validBraces[str[i]])
  } else {
    if (str[i] !== braces[validBraces.pop()]){
      return false
    }
  }
}

return !validBraces.length;





//   const braces = {
//     '(' : ')',
//     '[' : ']',
//     '{' : '}'
//   }
// // pairOfBrackets[arrLeftBrackets.pop()]
//   let leftBrackets = [];
//   for (let i = 0; i < str.length; i ++){
//     let char = str[i];
//     if (Object.keys(braces).includes(char)){
//       leftBrackets.push(char)
//     } else {
//       if (char !== braces[leftBrackets.pop()]){
//         return false;
//       } 
//     }
//   }

// return !leftBrackets.length;












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