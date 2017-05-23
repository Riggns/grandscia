define(function(require) {
   require('angular')
   .module('app.especie.services', [])
   .service('EspecieService', require('app/modules/especie/services/EspecieService'));
});