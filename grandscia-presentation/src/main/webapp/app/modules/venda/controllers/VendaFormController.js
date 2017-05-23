define([], function() {


 	VendaFormController.$inject = ['VendaService', '$state', 'entity', '$scope', 'gumgaController'];

 	function VendaFormController(VendaService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, VendaService, 'venda');



    
    	$scope.venda.data = entity.data || {};
		$scope.venda.data.itens = $scope.venda.data.itens || [];
		$scope.continue = {};
	
		$scope.venda.on('putSuccess',function(data){
			$state.go('venda.list');
		});
 	}
	
	return VendaFormController;   
});