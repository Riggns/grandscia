define(['app/apiLocations'], function(APILocation) {

	AcessoriosService.$inject = ['GumgaRest'];

	function AcessoriosService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/acessorios');

    	return Service;
    }

  	return AcessoriosService;
});