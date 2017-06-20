var prompt = require("prompt");
prompt.start();

prompt.get(["costPerPack", "areaPerPack", "width", "height"], function(
  err,
  result
) {
  var costPerPack = parseFloat(result.costPerPack);
  var areaPerPack = parseFloat(result.areaPerPack);
  var area = parseFloat(result.width) * parseFloat(result.height);
  console.log(
    "You need to cover ",
    area,
    "square units. It will cost you ",
    area / areaPerPack * costPerPack,
    "dollars."
  );
});
