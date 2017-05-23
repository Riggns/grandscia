define(['app/apiLocations'], function(APILocation) {

	CombustivelService.$inject = ['GumgaRest'];

	function CombustivelService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/combustivel');

    	return Service;
    }

  	return CombustivelService;
});