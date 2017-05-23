define(['app/apiLocations'], function(APILocation) {

	VendaService.$inject = ['GumgaRest'];

	function VendaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/venda');

    	return Service;
    }

  	return VendaService;
});