'use strict';

const filterByDistrict = (stations,query) => {
  state.stations.forEach(function(e){
      if(e.district.toLowerCase()==query.toLowerCase()){
        $(".allStations-container").remove();
        $(".stations-container").remove();
        const stationContainer = $("<div class='stations-container'></div>");
        const filteredStation = $("<div class='filtered-station'></div>");
        const mapIcon = $('<span class="fa fa-map" aria-hidden="true"></span>');
        filteredStation.text(e.name + e.address);
        filteredStation.append(mapIcon);
        stationContainer.append(filteredStation);
        $("#root").append(stationContainer);
    }
 });
};
