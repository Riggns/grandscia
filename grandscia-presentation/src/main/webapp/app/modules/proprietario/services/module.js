define(function(require) {
   require('angular')
   .module('app.proprietario.services', [])
   .service('ProprietarioService', require('app/modules/proprietario/services/ProprietarioService'));
});