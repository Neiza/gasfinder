'use strict';

const filterByDistrict = (stations,query) => {
  console.log("j");

 state.stations.forEach(function(e){
  if(e.district.toLowerCase()==query.toLowerCase()){
    alert("E");
    const contain = $("<div class='input-container'></div>");
    const d = $("<div class='div'></div>");
    d.text(e.name + e.address);

    contain.append(d);
    $("#dcont").append(contain);
  }
 });
};
