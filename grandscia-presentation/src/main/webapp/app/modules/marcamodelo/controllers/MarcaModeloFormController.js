define([], function() {


 	MarcaModeloFormController.$inject = ['MarcaModeloService', '$state', 'entity', '$scope', 'gumgaController'];

 	function MarcaModeloFormController(MarcaModeloService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, MarcaModeloService, 'marcamodelo');



    
    	$scope.marcamodelo.data = entity.data || {};
		$scope.continue = {};
	
		$scope.marcamodelo.on('putSuccess',function(data){
			$state.go('marcamodelo.list');
		});
 	}
	
	return MarcaModeloFormController;   
});