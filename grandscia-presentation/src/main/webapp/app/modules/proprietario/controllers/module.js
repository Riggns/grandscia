define(function (require) {
    var angular = require('angular');
    require('app/modules/proprietario/services/module');
    require('angular-ui-router');

    return angular
            .module('app.proprietario.controllers', ['app.proprietario.services','ui.router'])
            .controller('ProprietarioFormController', require('app/modules/proprietario/controllers/ProprietarioFormController'))
            .controller('ProprietarioListController', require('app/modules/proprietario/controllers/ProprietarioListController'));
});