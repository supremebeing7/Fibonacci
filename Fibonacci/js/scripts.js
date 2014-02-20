var fibonacci = function(numberInput) {
  if (numberInput === 1) {
    return 0;
  } else if (numberInput === 2) {
    return 1;
  } else {
    return numberInput - fibonacci(numberInput -1);
  };
};
