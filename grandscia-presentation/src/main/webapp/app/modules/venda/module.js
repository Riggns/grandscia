define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/venda/services/module');
  require('app/modules/venda/controllers/module');

  return require('angular')
    .module('app.venda', [
      'ui.router',
      'app.venda.controllers',
      'app.venda.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('venda.list', {
          url: '/list',
          templateUrl: 'app/modules/venda/views/list.html',
          controller: 'VendaListController'
        })
        .state('venda.insert', {
          url: '/insert',
          templateUrl: 'app/modules/venda/views/form.html',
          controller: 'VendaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/venda/new');
            }]
          }
        })
        .state('venda.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/venda/views/form.html',
          controller: 'VendaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/venda/' + $stateParams.id);
            }]
          }
        });
    })
});