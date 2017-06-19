var prompt = require("prompt");
prompt.start();

prompt.get(["taxrate", "cost"], function(err, result) {
  var taxrate = parseFloat(result.taxrate);
  var cost = parseFloat(result.cost);
  var result = taxrate * cost + cost;
  console.log(result);
});
