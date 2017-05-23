define(function(require) {
   require('angular')
   .module('app.veiculo.services', [])
   .service('VeiculoService', require('app/modules/veiculo/services/VeiculoService'));
});