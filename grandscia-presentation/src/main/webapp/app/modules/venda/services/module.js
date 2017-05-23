define(function(require) {
   require('angular')
   .module('app.venda.services', [])
   .service('VendaService', require('app/modules/venda/services/VendaService'));
});