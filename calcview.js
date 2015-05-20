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
