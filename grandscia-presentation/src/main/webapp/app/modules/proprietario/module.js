define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/proprietario/services/module');
  require('app/modules/proprietario/controllers/module');

  return require('angular')
    .module('app.proprietario', [
      'ui.router',
      'app.proprietario.controllers',
      'app.proprietario.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('proprietario.list', {
          url: '/list',
          templateUrl: 'app/modules/proprietario/views/list.html',
          controller: 'ProprietarioListController'
        })
        .state('proprietario.insert', {
          url: '/insert',
          templateUrl: 'app/modules/proprietario/views/form.html',
          controller: 'ProprietarioFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/proprietario/new');
            }]
          }
        })
        .state('proprietario.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/proprietario/views/form.html',
          controller: 'ProprietarioFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/proprietario/' + $stateParams.id);
            }]
          }
        });
    })
});