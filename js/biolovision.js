'use strict';

var url = new URL(window.location.href);

function toCSV(filename, fullTable){
  
  if ( url.searchParams.get("sp_FChoice") == 'species' ) {
    var data=[];
    
    // Add header
    if (fullTable){
      data.push(['number','common_name','scientific_name','latest_date','breeding','link_observation','link_stat','link_info'])
    } else {
      data.push(['number','common_name','scientific_name'])
    }
    
    // Add column
    Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function(row){
      var d=[];
      d.push(parseInt(row.getElementsByClassName('text-right col-sm-1')[0].innerHTML)) //number
      d.push(row.querySelectorAll('b')[0].innerText) // English
      d.push(row.querySelectorAll('i')[0].innerText) //latin
      if (fullTable){
        d.push(row.querySelectorAll('i')[1].innerText) //Date latest sighting
        row.querySelectorAll('i')[2] ? d.push(row.querySelectorAll('i')[2].innerText) : d.push("") // nidification if available
        d.push(row.querySelectorAll('a')[0].href) // link observations
        row.querySelectorAll('a')[1] ? d.push(row.querySelectorAll('a')[1].href) : d.push("") // link statistic 
        row.querySelectorAll('a')[2] ? d.push(row.querySelectorAll('a')[2].href) : d.push("") // link information.
      }
      data.push(d)
    })
  } else if( url.searchParams.get("sp_FChoice") == 'synth' ){
    var data=[];
    
    // Add header
    if (fullTable){
      data.push(['number','common_name','observers','places','link_observations','link_stat','link_info','photo'])
    } else {
      data.push(['number','common_name'])
    }
    // Add column
    Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function(row){
      var d=[];
      d.push(row.querySelectorAll('span')[0].innerHTML.split('&nbsp;')[1]) //number
      d.push(row.querySelectorAll('b')[0].innerText) // English
      if (fullTable){
        d.push(row.querySelectorAll('.col-sm-4')[1].innerText) //observer
        d.push(row.querySelectorAll('.col-sm-4')[2].innerText) //places
        d.push(row.querySelectorAll('a')[0].href) // link observations
        row.querySelectorAll('a')[1] ? d.push(row.querySelectorAll('a')[1].href) : d.push("") // link statistic 
        row.querySelectorAll('a')[2] ? d.push(row.querySelectorAll('a')[2].href) : d.push("") // link information.
        row.querySelectorAll('a')[3] ? d.push(row.querySelectorAll('a')[3].href) : d.push("") // link information.
      }
      data.push(d)
    })
  } else {
    console.log('error')
    exit
  }
  
  var csvContent = "data:text/csv;charset=utf-8,";
  data.forEach(function(d) {
    csvContent += d.join(",") + "\n";
  });
  
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename+'.csv');
  link.click();
}


function toMap(bound){
  document.getElementById("sp_DChoiceCoord").checked = true;
  if (url.host == 'www.ornitho.ch'){
    
    jQuery.getJSON('https://geodesy.geo.admin.ch/reframe/wgs84tolv95?easting=' + bound[0] +'&northing=' + bound[1] +'&format=json', function(ws){
    document.querySelector('input[name="sp_CoordCH[W]"]').value = Math.round(ws.easting-2000000);
    document.querySelector('input[name="sp_CoordCH[S]"]').value = Math.round(ws.northing-1000000);
  })
  jQuery.getJSON('https://geodesy.geo.admin.ch/reframe/wgs84tolv95?easting=' + bound[2] +'&northing=' + bound[3] +'&format=json', function(en){
  document.querySelector('input[name="sp_CoordCH[E]"]').value = Math.round(en.easting-2000000);
  document.querySelector('input[name="sp_CoordCH[N]"]').value = Math.round(en.northing-1000000);
})
} else {
  document.querySelector('input[name="sp_Coord[W]"]').value = bound[0];
  document.querySelector('input[name="sp_Coord[S]"]').value = bound[1];
  document.querySelector('input[name="sp_Coord[E]"]').value = bound[2];
  document.querySelector('input[name="sp_Coord[N]"]').value = bound[3];
}
}

const month = ["January",  "February", "March", "April","May","June","July","August","September","October","November","December"];
function plusoumoins(value){
  document.getElementById("sp_DChoiceSeason").checked = true;
  
  var date = new Date()
  date.setDate(date.getDate() - value)
  document.querySelector('input[name="sp_DSeasonFromDay"]').value = date.getDate();
  document.querySelector('select[name="sp_DSeasonFromMonth"]').selectedIndex = date.getMonth();
  date.setDate(date.getDate() + 2*value)
  document.querySelector('select[name="sp_DSeasonToMonth"]').selectedIndex = date.getMonth();
  document.querySelector('input[name="sp_DSeasonToDay"]').value = date.getDate();
}


