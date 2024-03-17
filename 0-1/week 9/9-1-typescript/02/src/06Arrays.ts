type numberArr = number;
function maxValue(arr: numberArr[]){
  let max = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3, 4, 5])); // 5