module.exports = function reverse (n) {
  let newArr = [];
  let arrDigit = String(n).split('');
  console.log(arrDigit);
  if(arrDigit[0] == '-'){
    for (let i = arrDigit.length - 1; i > 0; i--) {
        newArr.push(arrDigit[i]);
    }
  } else{
      for (let i = arrDigit.length - 1; i > -1; i--) {
          newArr.push(arrDigit[i]);
      }
  }

  return newArr.join('');
}
