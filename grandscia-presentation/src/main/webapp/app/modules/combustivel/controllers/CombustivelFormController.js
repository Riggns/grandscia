define([], function() {


 	CombustivelFormController.$inject = ['CombustivelService', '$state', 'entity', '$scope', 'gumgaController'];

 	function CombustivelFormController(CombustivelService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, CombustivelService, 'combustivel');



    
    	$scope.combustivel.data = entity.data || {};
		$scope.continue = {};
	
		$scope.combustivel.on('putSuccess',function(data){
			$state.go('combustivel.list');
		});
 	}
	
	return CombustivelFormController;   
});