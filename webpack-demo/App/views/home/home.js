var homeTemplate = require('../home/home.html')

var viewModel = kendo.observable({
    title: "Home"
})

var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function () {
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;