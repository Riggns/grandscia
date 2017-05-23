define(function (require) {
    var angular = require('angular');
    require('app/modules/especie/services/module');
    require('angular-ui-router');

    return angular
            .module('app.especie.controllers', ['app.especie.services','ui.router'])
            .controller('EspecieFormController', require('app/modules/especie/controllers/EspecieFormController'))
            .controller('EspecieListController', require('app/modules/especie/controllers/EspecieListController'));
});