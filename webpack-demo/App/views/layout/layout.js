var layoutTemplate = require('../layout/layout.html');


var nav;

// these links populate the navbar
var viewModel = kendo.observable({
    links: [{ title: 'Home', href: '#/', icon: 'home', icon: 'fa fa-home' },
            { title: 'Details', href: '#/details', icon: 'fa fa-ellipsis-h' }]
});

var layout = new kendo.Layout(layoutTemplate, {
    model: viewModel,
    init: function (e) {
        // cache a reference to the nav links element
        nav = e.sender.element.find('#nav-links');
    }
});

$.subscribe('/router/change', function (e) {

    // select a nav link based on the current route
    var active = nav.find('a[href="#' + e.url + '"]').parent();

    // if the nav link exists...
    if (active.length > 0) {

        // remove the active class from all links
        nav.find('li').removeClass('active');

        // add the active class to the current link
        active.addClass('active');
    }
});


module.exports = layout;