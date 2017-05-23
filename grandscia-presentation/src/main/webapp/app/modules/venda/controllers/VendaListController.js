define([], function() {

  VendaListController.$inject = ['$scope', 'VendaService', 'gumgaController'];

  function VendaListController($scope, VendaService, gumgaController) {

    gumgaController.createRestMethods($scope, VendaService, 'venda');

    VendaService.resetDefaultState();
    $scope.venda.execute('get');

    $scope.tableConfig = {
      columns: 'cliente ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'cliente',
        title: '<span gumga-translate-tag="venda.cliente"> cliente </span>',
        content: '{{$value.cliente }}',
        sortField: 'cliente'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="venda.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return VendaListController;
});
