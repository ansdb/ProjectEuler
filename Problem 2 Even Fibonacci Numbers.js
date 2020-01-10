function fiboEvenSum(n) {
    let result = 0;
    let arr = [1, 2]
    for(let i = 0; i < n; i++){
      arr.push(arr[i] + arr[i+1]);
      if(arr[i] % 2 === 0){
        result += arr[i];
      }
    }
    return result;
  }