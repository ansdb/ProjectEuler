function multiplesOf3and5(number) {
    let result = 0;
    while(number >= 3){
        if((number - 1) % 3 === 0 || (number - 1) % 5 === 0){
          result += (number - 1);
        }
        number--;
    }
    return result;
  }