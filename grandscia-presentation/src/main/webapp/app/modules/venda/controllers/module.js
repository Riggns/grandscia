define(function (require) {
    var angular = require('angular');
    require('app/modules/venda/services/module');
    require('angular-ui-router');

    return angular
            .module('app.venda.controllers', ['app.venda.services','ui.router'])
            .controller('ModalItemVendaController', require('app/modules/venda/controllers/ModalItemVendaController'))
            .controller('VendaFormController', require('app/modules/venda/controllers/VendaFormController'))
            .controller('VendaListController', require('app/modules/venda/controllers/VendaListController'));
});