var prompt = require("prompt");
prompt.start();

prompt.get(["cost", "paid"], function(err, result) {
  var cost = parseFloat(result.cost);
  var paid = parseFloat(result.paid);
  var difference = paid - cost;
  var quarters = 0;
  var dimes = 0;
  var nickles = 0;
  var pennies = 0;
  while (difference >= 0.25) {
    quarters++, (difference -= 0.25);
  }
  while (difference >= 0.1) {
    dimes++, (difference -= 0.1);
  }
  while (difference >= 0.05) {
    nickles++, (difference -= 0.05);
  }
  while (difference >= 0.0) {
    pennies++, (difference -= 0.01);
  }
  console.log(
    "You have ",
    quarters,
    "quarters, ",
    dimes,
    " dimes, ",
    nickles,
    " nickles, and ",
    pennies,
    "pennies."
  );
});
