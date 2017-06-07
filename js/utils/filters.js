'use strict';

const filterByDistrict = (stations,query) => {
  state.stations.forEach(function(e){
    if(e.district.toLowerCase()==query.toLowerCase()){
      alert("E");
      const stationsContainer = $("<div class='stations-container'></div>");
      const filteredStation = $("<div class='filtered-station'></div>");
      filteredStation.text(e.name + e.address);

      stationsContainer.append(filteredStation);
      $("#root").append(stationsContainer);
    }
 });
};
