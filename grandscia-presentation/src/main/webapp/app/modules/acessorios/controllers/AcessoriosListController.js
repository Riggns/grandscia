define([], function() {

  AcessoriosListController.$inject = ['$scope', 'AcessoriosService', 'gumgaController'];

  function AcessoriosListController($scope, AcessoriosService, gumgaController) {

    gumgaController.createRestMethods($scope, AcessoriosService, 'acessorios');

    AcessoriosService.resetDefaultState();
    $scope.acessorios.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="acessorios.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="acessorios.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AcessoriosListController;
});
