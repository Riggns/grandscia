define(['app/apiLocations'], function(APILocation) {

	MarcaModeloService.$inject = ['GumgaRest'];

	function MarcaModeloService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/marcamodelo');

    	return Service;
    }

  	return MarcaModeloService;
});