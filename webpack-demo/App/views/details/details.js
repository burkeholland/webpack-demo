var detailsTemplate = require('../details/details.html');

var viewModel = kendo.observable({
    title: 'Details'
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function (e) {
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;
