define(function (require) {
    var angular = require('angular');
    require('app/modules/marcamodelo/services/module');
    require('angular-ui-router');

    return angular
            .module('app.marcamodelo.controllers', ['app.marcamodelo.services','ui.router'])
            .controller('MarcaModeloFormController', require('app/modules/marcamodelo/controllers/MarcaModeloFormController'))
            .controller('MarcaModeloListController', require('app/modules/marcamodelo/controllers/MarcaModeloListController'));
});