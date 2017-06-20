var prompt = require("prompt");
prompt.start();

prompt.get(
  ["numberOfYears", "interestRate", "loan", "compoundingInterval"],
  function(err, result) {
    var numberOfYears = parseFloat(result.numberOfYears);

    var interestRate = parseFloat(result.interestRate);

    var loan = parseFloat(result.loan);

    var compoundingInterval = result.compoundingInterval;

    var c = 0;
    var n = 0;
    var payment = 0;

    console.log(c);
    if (compoundingInterval == "monthly") {
      c = interestRate / 100 / 12;
      n = numberOfYears * 12;
    } else if (compoundingInterval == "weekly") {
      c = interestRate / 100 / 52;
      n = numberOfYears * 52;
    } else if (compoundingInterval == "daily") {
      c = interestRate / 100 / 365;
      n = numberOfYears * 365;
    }

    payment = loan * (c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1);

    time = loan / payment;

    console.log("Your fixed payment is ", payment, " dollars.");
  }
);
