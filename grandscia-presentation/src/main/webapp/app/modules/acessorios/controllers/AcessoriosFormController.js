define([], function() {


 	AcessoriosFormController.$inject = ['AcessoriosService', '$state', 'entity', '$scope', 'gumgaController', 'VeiculoService'];

 	function AcessoriosFormController(AcessoriosService, $state, entity, $scope, gumgaController, VeiculoService) {

    	gumgaController.createRestMethods($scope, AcessoriosService, 'acessorios');


	    gumgaController.createRestMethods($scope, VeiculoService, 'veiculo');
	    $scope.veiculo.methods.search('renavam','');    

	    $scope.veiculoOptions=[];
    
    	$scope.acessorios.data = entity.data || {};
		$scope.continue = {};
	
		$scope.acessorios.on('putSuccess',function(data){
			$state.go('acessorios.list');
		});
 	}
	
	return AcessoriosFormController;   
});