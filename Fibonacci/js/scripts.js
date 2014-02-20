var fibonacci = function(numberInput) {
  var result;
  var fibonacciArray = [0,1];

  if (numberInput === 1) {
    return 0;
  } else if (numberInput === 2) {
    return 1;
  } else {
    for (var i = 0; i <= 100; i++) {
      result = fibonacciArray[i] + fibonacciArray[i+1];
      fibonacciArray.push(result);
      console.log(result);
    };
    return fibonacciArray[numberInput-1];

    //return numberInput - fibonacci(numberInput -1) - fibonacci(numberInput -2);
  };
};
