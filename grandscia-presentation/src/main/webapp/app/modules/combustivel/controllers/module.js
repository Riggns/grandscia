define(function (require) {
    var angular = require('angular');
    require('app/modules/combustivel/services/module');
    require('angular-ui-router');

    return angular
            .module('app.combustivel.controllers', ['app.combustivel.services','ui.router'])
            .controller('CombustivelFormController', require('app/modules/combustivel/controllers/CombustivelFormController'))
            .controller('CombustivelListController', require('app/modules/combustivel/controllers/CombustivelListController'));
});