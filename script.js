(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CalculatorModel = Backbone.Model.extend({
  defaults: {
    result: 0,
    input: 0
  },
  doMath: function (operation) {
    //get the current value
    var value = this.get("result");
    //get the input value
    var input = this.get("input");
    //add, subtract, multiply or divide
    if (operation == "add") {
      var output = value + input;
    }
    //set the result
    this.set("result", output);
  }
});

module.exports = CalculatorModel;

},{}],2:[function(require,module,exports){
var CalculatorView = Backbone.View.extend({
  el: ".calculator",
  initialize: function () {
    this.listenTo(this.model, "change:result", this.render)
  },
  events: {
    "keyup .input": "updateInput",
    "click .operation": "runOperation"
  },
  template: _.template($("#calc-template").html()),
  render: function() {
    var model = this.model.toJSON();
    var html = this.template(model);
    this.$el.html(html);
  },
  updateInput: function(e) {
    var value = e.target.value;
    this.model.set("input", Number(value));
  },
  runOperation: function(e) {
    var op = $(e.target).data("op");
    this.model.doMath(op);
  }
});

module.exports = CalculatorView;

},{}],3:[function(require,module,exports){
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

},{"./calcmodel":1,"./calcview":2}]},{},[3]);
