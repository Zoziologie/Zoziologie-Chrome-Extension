//'use strict';

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  var url = new URL(tabs[0].url);
  console.log(url)
  
  if ( url.searchParams.get("m_id") == 94 || url.searchParams.get("m_id") == 32 ) { // BiolovisionToCsv
    jQuery('#BiolovisionToCsv').show()
    
  } else if ( url.searchParams.get("m_id") == 8 ) {// BiolovisionMap
    jQuery('#BiolovisionMap').show()
    countrieslist = [{"osm_id":"51701","name":"Switzerland","kml":true,"website":"http://www.ornitho.ch","eBirdCode":"CH","layer_id":174,"bound":[5.9559113,45.817995,10.4922941,47.8084648]},{"osm_id":"365331","name":"Italy","kml":false,"website":"http://www.ornitho.it","eBirdCode":"IT","layer_id":199,"bound":[6.6272658,35.2889616,18.7844746,47.0921462]},{"osm_id":"16239","name":"Austria","kml":false,"website":"http://www.ornitho.at","eBirdCode":"AU","layer_id":207,"bound":[9.5307487,46.3722761,17.160776,49.0205264]},{"osm_id":"51477","name":"Germany","kml":false,"website":"http://www.ornitho.de","eBirdCode":"DE","layer_id":209,"bound":[5.8663153,47.2701114,15.0419319,55.099161]},{"osm_id":"349053","name":"Catalonia","kml":true,"website":"http://www.ornitho.cat","eBirdCode":"ES-CT","layer_id":201,"bound":[0.1591812,40.5230524,3.3323241,42.8615226]},{"osm_id":"2171347","name":"Luxembourg","kml":false,"website":"http://ornitho.lu","eBirdCode":"LU","layer_id":146,"bound":[5.7357006,49.4478539,6.5312481,50.1827724]},{"osm_id":"49715","name":"Poland","kml":false,"website":"http://ornitho.pl","eBirdCode":"PL","layer_id":193,"bound":[14.1229707,49.0020468,24.145783,55.0336963]},{"osm_id":"349042","name":"Basque Country","kml":true,"website":"http://www.ornitho.eus/","eBirdCode":"ES-PV","layer_id":120,"bound":[-3.4492757,42.4722553,-1.7283381,43.4568551]},{"osm_id":"8641","name":"Champagne-Ardenne","kml":false,"website":"http://www.faune-Champagne-ardenne.org","eBirdCode":"FR-G","layer_id":185,"bound":[3.383639,47.5767134,5.8909943,50.1693225]},{"osm_id":"8636","name":"Alsace","kml":false,"website":"http://www.faune-alsace.org","eBirdCode":"FR-A","layer_id":122,"bound":[6.8413178,47.4203421,8.2325219,49.0777916]},{"osm_id":"8645","name":"Lorraine","kml":false,"website":"http://www.faune-lorraine.org","eBirdCode":"FR-M","layer_id":179,"bound":[4.888456,47.8136866,7.6388203,49.6169111]},{"osm_id":"7428","name":"Charente","kml":false,"website":"http://www.faune-Charente.org","eBirdCode":"","layer_id":148,"bound":[-0.4631401,45.1925466,0.947036,46.1408959]},{"osm_id":"7431","name":"Charente-Maritime","kml":false,"website":"http://www.faune-Charente-maritime.org","eBirdCode":"","layer_id":187,"bound":[-1.5626911,45.0889798,0.0059949,46.3715027]},{"osm_id":"8644","name":"Limousin","kml":false,"website":"http://www.faune-limousin.eu","eBirdCode":"","layer_id":181,"bound":[0.6293431,44.9204855,2.6114965,46.4553387]},{"osm_id":"7455","name":"Deux-Sèvres","kml":false,"website":"http://www.nature79.org","eBirdCode":"","layer_id":162,"bound":[-0.9034927,45.9695819,0.2203998,47.1083966]},{"osm_id":"8637","name":"Aquitaine","kml":false,"website":"http://www.faune-aquitaine.org","eBirdCode":"FR-B","layer_id":197,"bound":[-1.7910226,42.7775376,1.4481424,45.7148006]},{"osm_id":"7377","name":"Vienne","kml":false,"website":"http://vienne.lpo.fr","eBirdCode":"","layer_id":150,"bound":[-0.1049762,46.0482926,1.2131909,47.1759223]},{"osm_id":"7387","name":"Ain","kml":false,"website":"http://www.faune-ain.org","eBirdCode":"FR-V","layer_id":124,"bound":[4.7281684,45.6107563,6.1700273,46.5199006]},{"osm_id":"8638","name":"Auvergne","kml":false,"website":"http://www.faune-auvergne.org","eBirdCode":"","layer_id":195,"bound":[2.0629028,44.615934,4.4904591,46.8041547]},{"osm_id":"7430","name":"Ardèche","kml":false,"website":"http://www.faune-ardeche.org","eBirdCode":"","layer_id":152,"bound":[3.8610959,44.2643356,4.8862374,45.3662213]},{"osm_id":"7434","name":"Drôme","kml":false,"website":"http://www.faune-drome.org","eBirdCode":"","layer_id":126,"bound":[4.6469077,44.1151806,5.8304369,45.3439766]},{"osm_id":"7407","name":"Haute-Savoie","kml":false,"website":"http://haute-savoie.lpo.fr","eBirdCode":"FR-V","layer_id":117,"bound":[5.8051345,45.6816667,7.0443824,46.4563726]},{"osm_id":"7437","name":"Isère","kml":false,"website":"http://www.faune-isere.org","eBirdCode":"FR-V","layer_id":128,"bound":[4.7415728,44.6958924,6.3580834,45.8836319]},{"osm_id":"7420","name":"Loire","kml":false,"website":"http://www.faune-loire.org","eBirdCode":"","layer_id":168,"bound":[3.6884431,45.2310638,4.7607591,46.2765323]},{"osm_id":"4850451","name":"Rhône","kml":false,"website":"http://www.faune-rhone.org","eBirdCode":"FR-V","layer_id":154,"bound":[4.2436423,45.454026,5.1603205,46.3064984]},{"osm_id":"7425","name":"Savoie","kml":false,"website":"http://www.faune-savoie.org","eBirdCode":"","layer_id":130,"bound":[5.6218274,45.0516188,7.1859342,45.9385182]},{"osm_id":"102740","name":"Brittany","kml":false,"website":"http://www.faune-bretagne.org","eBirdCode":"","layer_id":211,"bound":[-5.1414274,47.2777959,-1.0156899,48.9086459]},{"osm_id":"7424","name":"Côte-d'Or","kml":false,"website":"http://www.oiseaux-cote-dor.org","eBirdCode":"","layer_id":132,"bound":[4.0654023,46.8998587,5.5188651,48.0311785]},{"osm_id":"8642","name":"Free County","kml":false,"website":"http://franche-comte.lpo.fr","eBirdCode":"FR-I","layer_id":164,"bound":[5.2520162,46.2610242,7.1432754,48.0241451]},{"osm_id":"7448","name":"Nièvre","kml":false,"website":"http://www.faune-nievre.org","eBirdCode":"","layer_id":134,"bound":[2.8444817,46.6510237,4.2317941,47.5883394]},{"osm_id":"7392","name":"Yonne","kml":false,"website":"http://www.faune-yonne.org","eBirdCode":"","layer_id":136,"bound":[2.8484902,47.3103627,4.3400736,48.4000592]},{"osm_id":"7456","name":"Cher","kml":false,"website":"http://www.faune-Cher.org","eBirdCode":"","layer_id":138,"bound":[1.773897,46.4204558,3.079205,47.6290994]},{"osm_id":"7408","name":"Indre-et-Loire","kml":false,"website":"http://www.faune-touraine.org","eBirdCode":"","layer_id":140,"bound":[0.0527209,46.736661,1.3659439,47.7097889]},{"osm_id":"8643","name":"Languedoc-Roussillon","kml":false,"website":"http://www.faune-lr.org","eBirdCode":"FR-K","layer_id":191,"bound":[1.6887151,42.3327551,4.8455335,44.975777]},{"osm_id":"7451","name":"Aveyron","kml":false,"website":"http://www.faune-tarn-aveyron.org","eBirdCode":"","layer_id":156,"bound":[1.8396578,43.6907435,3.4520493,44.9412011]},{"osm_id":"8649","name":"Ile-de-France","kml":false,"website":"http://www.faune-iledefrance.org","eBirdCode":"FR-J","layer_id":158,"bound":[1.4462445,48.1201456,3.5592208,49.241431]},{"osm_id":"7432","name":"Loire-Atlantique","kml":false,"website":"http://www.faune-loire-atlantique.org","eBirdCode":"","layer_id":183,"bound":[-2.6250614,46.8603369,-0.9467288,47.8359417]},{"osm_id":"7409","name":"Maine-et-Loire","kml":false,"website":"http://www.faune-anjou.org","eBirdCode":"","layer_id":166,"bound":[-1.3542237,46.9689134,0.2344382,47.8097152]},{"osm_id":"7438","name":"Mayenne","kml":false,"website":"http://www.faune-maine.org","eBirdCode":"","layer_id":170,"bound":[-1.2388499,47.7338222,-0.0490169,48.5682888]},{"osm_id":"7443","name":"Sarthe","kml":false,"website":"http://www.faune-maine.org","eBirdCode":"","layer_id":160,"bound":[-0.4480701,47.5683942,0.9165988,48.4849915]},{"osm_id":"7402","name":"Vendée","kml":false,"website":"http://www.faune-vendee.org","eBirdCode":"","layer_id":189,"bound":[-2.3999055,46.2665368,-0.5381141,47.0849922]},{"osm_id":"8654","name":"Provence-Alpes-Côte d'Azur","kml":false,"website":"http://www.faune-paca.org","eBirdCode":"FR-U","layer_id":205,"bound":[4.2301364,42.9822468,7.7184776,45.1266002]},{"osm_id":"1260552","name":"Martinique","kml":false,"website":"http://www.faune-martinique.org","eBirdCode":"","layer_id":172,"bound":[-61.2290814,14.3887031,-60.8095832,14.8787327]},{"osm_id":"77601","name":"Réunion","kml":false,"website":"http://www.faune-reunion.fr","eBirdCode":"RE","layer_id":142,"bound":[55.2164268,-21.3897307,55.8366924,-20.8717135]},{"osm_id":"2202121","name":"French Guiana","kml":false,"website":"http://www.faune-guyane.fr","eBirdCode":"","layer_id":144,"bound":[-54.6027799,2.112222,-51.6346138,5.7507111]},{"osm_id":"1403916","name":"France","kml":false,"website":"https://www.faune-france.org","eBirdCode":"FR","layer_id":203,"bound":[-5.4534286,41.2632184,9.8678344,51.268318]}];
    var country = countrieslist.find(e => e.website.includes(url.host))
    console.log(country)
    
    var map = L.map('map').fitBounds([ [country.bound[1], country.bound[0]], [country.bound[3], country.bound[2]] ]);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    
    layer = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 50,
      spiderfyDistanceMultiplier: 2
    }).addTo(map);

    jQuery.getJSON("https://api.ebird.org/v2/ref/hotspot/"+country.eBirdCode+"?fmt=json",function(data){
      data.forEach(e => {
        var mark = L.marker([e.lat, e.lng],{
          title: e.locName,
          alt: e.locName,
          icon: L.icon({
            iconUrl: "images/hotspot-icon-hotspot.png",
            iconAnchor: [15, 19],
            popupAnchor: [0, -19],
          })
        }).on('click',function(e){
          var tmp = e.target.getLatLng();
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id, {code: 'toMap(['+(tmp.lng-0.01)+", "+(tmp.lat-0.01)+", "+(tmp.lng+0.01)+", "+(tmp.lat+0.01)+']);'});
          });
          $("#alertDrawRectSucc").fadeTo(2000, 500).slideUp(500, function(){
            $("#alertDrawRectSucc").slideUp(500);
          });
        }).addTo(layer);
      })
    })
    
    Layerdraw = new L.FeatureGroup().addTo(map);
    var RectDraw = new L.Draw.Rectangle(map);
    map.on('draw:created', function (e) {
      Layerdraw.clearLayers();
      Layerdraw.addLayer(e.layer)
      var tmp = e.layer.getBounds();
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'toMap(['+tmp.getWest()+", "+tmp.getSouth()+", "+tmp.getEast()+", "+tmp.getNorth()+']);'});
      });
      $("#alertDrawRectSucc").fadeTo(2000, 500).slideUp(500, function(){
        $("#alertDrawRectSucc").slideUp(500);
      });
    })
    
    jQuery('#drawRectangle').on('click', function() {
      RectDraw.enable();
    });
    
  } else if ( url.pathname.includes('targets') ) { 
    jQuery('#eBirdTarget').show()
    
    select_options = {
      ajax: {
        url: "https://ebird.org/myLocations/find",
        //dataType: 'json',
        delay: 250,
        processResults: function (data, params) {
          var res = data.map(e => ({"text" : e.name, "id": e.code}));
          res.unshift({text: params.term, id: params.term})
          return {
            results: res,
          };
        },
        cache: true
      },
      theme: "bootstrap",
      placeholder: 'Enter any personal location or locID (e.g. "LXXXXXXX")',
      minimumInputLength: 3,
    }
    jQuery("#select_r1").select2(select_options).on('select2:select', function (e) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'toLocation("r1","' + e.params.data.text + '","'+e.params.data.id+'");'});
      });
      
    });
    jQuery("#select_r2").select2(select_options).on('select2:select', function (e) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'toLocation("r2","' + e.params.data.text + '","'+e.params.data.id+'");'});
      });
    });
  }
});



// FUNCTIONS
jQuery('#BiolovisionToCsvButton').on('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id,{code: 
      'toCSV("'+jQuery('#filename').val()+ '", '+jQuery('#full-table').is(':checked')+');'
    });
  });
});

jQuery('#eBirdTargetToCsvButton').on('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id,{code: 
      'toCSV("' +jQuery('#filename').val()+ '");'
    });
  });
});




jQuery('.plusoumoins').on('click', function(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {code: 'plusoumoins('+ event.target.getAttribute('value') + ');'});
  });
  $("#alertPlusOuMoinsSucc").fadeTo(2000, 500).slideUp(500, function(){
    $("#alertPlusOuMoinsSucc").slideUp(500);
  });
});




