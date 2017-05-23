define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/marcamodelo/services/module');
  require('app/modules/marcamodelo/controllers/module');

  return require('angular')
    .module('app.marcamodelo', [
      'ui.router',
      'app.marcamodelo.controllers',
      'app.marcamodelo.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('marcamodelo.list', {
          url: '/list',
          templateUrl: 'app/modules/marcamodelo/views/list.html',
          controller: 'MarcaModeloListController'
        })
        .state('marcamodelo.insert', {
          url: '/insert',
          templateUrl: 'app/modules/marcamodelo/views/form.html',
          controller: 'MarcaModeloFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/marcamodelo/new');
            }]
          }
        })
        .state('marcamodelo.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/marcamodelo/views/form.html',
          controller: 'MarcaModeloFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/marcamodelo/' + $stateParams.id);
            }]
          }
        });
    })
});