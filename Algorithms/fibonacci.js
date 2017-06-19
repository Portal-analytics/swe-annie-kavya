var prompt = require("prompt");
prompt.start();

prompt.get(["number"], function(err, result) {
  var number = result.number;
  function fibonacci(number) {
    if (number == 1) {
      return number;
    } else if (number == 0) {
      return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  result = fibonacci(number);
  console.log(result);
});
