'use strict';

var url = new URL(window.location.href);

jQuery('#targets-list-type').show()
jQuery('#targets-submit').show()


function toCSV(filename){
  
  var data=[];
  
  // Add header
  data.push(['rank','common_name','scientific_name','frequency','link_map'])

  // Add column
  Array.from(document.getElementsByClassName('ResultsStats')).forEach(function(res){
    var d=[];
    d.push(res.getElementsByClassName('ResultsStats-index')[0].innerHTML.split('.')[0]); // rank
    d.push(res.getElementsByClassName('SpecimenHeader-joined')[0].getElementsByTagName('a')[0].innerHTML.split('<em')[0].replace(/\r?\n|\r/g,'').replace(/\t/g,'')); //name
    d.push(res.getElementsByClassName('SpecimenHeader-joined')[0].getElementsByTagName('a')[0].getElementsByTagName('em')[0].innerText); //latin
    d.push(res.getElementsByClassName('StatsIcon-stat-count')[0].innerHTML); //
    d.push('https://ebird.org/'+res.getElementsByClassName('ResultsStats-action')[0].innerHTML.split('href="')[1].split('"')[0]); // map
    data.push(d)
  })
  
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


function toLocationr1(text,id){
  jQuery('input[name="region"]').val(text)
  jQuery('#targets-region-input-hidden').val(id)
}

function toLocation(r,text,id){
  if (r == "r1"){
    jQuery('input[name="region"]').val(text)
    jQuery('#targets-region-input-hidden').val(id)
  } else if(r=="r2"){
    // add option
    jQuery('#targets-comparison-region').append($('<option>', {
      value: id,
      text: text,
      selected: true
  }));
  }
}