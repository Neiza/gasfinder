'use strict';

const filterByDistrict = (stations,query) => {
 $.each(stations, function(e){
  if(e.district==query){
    alert("jj");
  }
});
};
