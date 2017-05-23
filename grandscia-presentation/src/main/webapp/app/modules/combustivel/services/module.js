define(function(require) {
   require('angular')
   .module('app.combustivel.services', [])
   .service('CombustivelService', require('app/modules/combustivel/services/CombustivelService'));
});