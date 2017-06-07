'use strict';

const stationItem = (station, update) => {
  const allStationsContainer = $('<div class="allStations-container"></div>');
  const stations = $('<div class="stations"></div>');
  stations.text(station.name + " " + station.address);
  const mapIcon = $('<span class="fa fa-map" aria-hidden="true"></span>');

  allStationsContainer.append(stations);
  stations.append(mapIcon);
  /* mapIcon.on('click',(e) => {
    e.preventDefault();
    state.selectedMovie = movie;
    update();
  }); */
  return allStationsContainer;
}

const StationsList = (update) => {
  const stationsContList = $('<div class="stationsContainer"></div>');
  state.stations.forEach((station) => {
    stationsContList.append(stationItem(station,update));
  });

  return stationsContList;
}
