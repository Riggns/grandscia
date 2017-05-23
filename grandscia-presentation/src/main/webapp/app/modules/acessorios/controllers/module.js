define(function (require) {
    var angular = require('angular');
    require('app/modules/acessorios/services/module');
    require('angular-ui-router');

    return angular
            .module('app.acessorios.controllers', ['app.acessorios.services','ui.router'])
            .controller('AcessoriosFormController', require('app/modules/acessorios/controllers/AcessoriosFormController'))
            .controller('AcessoriosListController', require('app/modules/acessorios/controllers/AcessoriosListController'));
});