var prompt = require("prompt");
prompt.start();

prompt.get(["firstnumber", "secondnumber"], function(err, result) {
  console.log(Math.pow(result.firstnumber, result.secondnumber));
});
