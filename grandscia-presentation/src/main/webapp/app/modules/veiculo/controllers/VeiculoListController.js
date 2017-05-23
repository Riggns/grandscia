define([], function() {

  VeiculoListController.$inject = ['$scope', 'VeiculoService', 'gumgaController'];

  function VeiculoListController($scope, VeiculoService, gumgaController) {

    gumgaController.createRestMethods($scope, VeiculoService, 'veiculo');

    VeiculoService.resetDefaultState();
    $scope.veiculo.execute('get');

    $scope.tableConfig = {
      columns: 'renavam ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'renavam',
        title: '<span gumga-translate-tag="veiculo.renavam"> renavam </span>',
        content: '{{$value.renavam }}',
        sortField: 'renavam'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="veiculo.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return VeiculoListController;
});
