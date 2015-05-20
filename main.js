var CalculatorModel = require("./calcmodel");
var CalculatorView = require("./calcview");

var calc = new CalculatorModel(); //constructor

calc.on("change:result", function() {
  console.log(calc.toJSON());
});

//constructor functions always capitalized


var view = new CalculatorView({
  model: calc
});
view.render();
