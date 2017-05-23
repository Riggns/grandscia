define(function (require) {
    var angular = require('angular');
    require('app/modules/veiculo/services/module');
    require('angular-ui-router');

    return angular
            .module('app.veiculo.controllers', ['app.veiculo.services','ui.router'])
            .controller('VeiculoFormController', require('app/modules/veiculo/controllers/VeiculoFormController'))
            .controller('VeiculoListController', require('app/modules/veiculo/controllers/VeiculoListController'));
});