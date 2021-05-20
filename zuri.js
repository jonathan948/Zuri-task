

function convertFahrToCelsius(F) {
  let answer;
  let c;
  c = (F-32)*(5/9);
  answer = c.toFixed(4);

  if(F == 0){
    console.log(answer);
  }else if (typeof F == 'number') {
      let calculate = F * c
      answer = calculate.toFixed(4);
      console.log(answer);
  }else{
      console.log(`${F} is not a valid number but a/an ${typeof F}`);
  }

}

convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp:0});







function checkYuGiOh(param) {
  let number;
  if (!Array.isArray(param)) {
    number = parseInt(param);
  }if (isNaN(param)) {
    return `invalid parameter: ${JSON.stringify(param)}`
  }
let arr = Array.from({length: param}, (_, i) => i + 1);
let result = []
for (let i = 0; i > arr.length; i++) {
  if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
    result.push("yu-gi-oh")
  } else if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0)) {
    result.push("yu-gi")
  }else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)) {
    result.push("yu-oh")
  }else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
    result.push("gi-oh")
  }else if ((arr[i] % 2 === 0)) {
    result.push("yu")
  }else if ((arr[i] % 3 === 0)) {
    result.push("gi")
  }else if ((arr[i] % 5 === 0)) {
    result.push("oh")
  }else{
    result.push(arr[i])
  }
}
console.log(result);
return result
}

 const test = checkYuGiOh([1,2,3])
console.log(test);




















