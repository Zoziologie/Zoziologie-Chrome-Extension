
var url = new URL(window.location.href);

const filename = "biolovision"

const box = document.querySelector('.box.flex-box')

if (box) {
  box.insertAdjacentHTML('beforeend', `
<div class="row">
  <div class="col-sm-20">
    <div class="flex-title">Export</div>
  </div>
  <div class="col-sm-80">
    <div style="float:left;padding-top:0.4rem;">
      <div style="float:left;">                                
        <em class="export_link bi bi-txt" style="margin-right: 0.2rem;vertical-align:middle;cursor:pointer;" href="#" id="zoziology-export" title="Télécharger un export en texte tabulé"></em>
      </div>                            
    </div>
  </div>
</div>
`)
}

document.addEventListener("click", function (e) {
  const target = e.target.closest("#zoziology-export");

  if (target) {
    var url = new URL(window.location.href);
    const filename = window.location.href.split("?")[1].substring(0, 190)
    if (url.searchParams.get("sp_FChoice") == 'species') {
      var data = [];

      // Add header
      data.push(['number', 'common_name', 'scientific_name', 'latest_date', 'breeding', 'link_observation', 'link_stat', 'link_info'])

      // Add column
      Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function (row) {
        var d = [];
        d.push(parseInt(row.getElementsByClassName('text-right col-sm-1')[0].innerHTML)) //number
        d.push(row.querySelectorAll('b')[0].innerText) // English
        d.push(row.querySelectorAll('.sci_name')[0].innerText.replace("(","").replace(")","")) //latin

        d.push(row.querySelectorAll('i:not([class])')[0].innerText) //Date latest sighting
        row.querySelectorAll('i')[2] ? d.push(row.querySelectorAll('i:not([class])')[1].innerText) : d.push("") // nidification if available
        row.querySelector('.ba-list') ? d.push(row.querySelector('.ba-list').parentNode.href) : d.push("")
        row.querySelector('.ba-stats') ? d.push(row.querySelector('.ba-stats').parentNode.href) : d.push("")
        row.querySelector('.ba-info') ? d.push(row.querySelector('.ba-info').parentNode.href) : d.push("")
       
        data.push(d)
      })
    } else if (url.searchParams.get("sp_FChoice") == 'synth') {
      var data = [];

      // Add header
      data.push(['number', 'common_name', 'observers', 'place', 'link_photo', 'link_observations', 'link_stat', 'link_info'])

      // Add column
      Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function (row) {
        var d = [];
        d.push(row.querySelectorAll('span')[0].innerHTML.split('&nbsp;')[1]) //number
        d.push(row.querySelectorAll('b')[0].innerText) // common name
        d.push(row.querySelectorAll('.col-sm-4')[1].innerText) //observer
        d.push(row.querySelectorAll('.col-sm-4')[2].innerText) //place
        row.querySelector('.fa-camera') ? d.push(row.querySelector('.fa-camera').parentNode.href) : d.push("")
        row.querySelector('.ba-list') ? d.push(row.querySelector('.ba-list').parentNode.href) : d.push("")
        row.querySelector('.ba-stats') ? d.push(row.querySelector('.ba-stats').parentNode.href) : d.push("")
        row.querySelector('.ba-info') ? d.push(row.querySelector('.ba-info').parentNode.href) : d.push("")
        data.push(d)
      })
    } else if (url.searchParams.get("sp_FChoice") == 'list') {
      var data = [];

      // Add header
      data.push(['date', 'place', 'place_link', 'number', 'common_name', 'scientific_name', 'remark'])

      // Add column
      document.querySelectorAll('.listContainer').forEach(function(list){
        let date = list.querySelector(".listTop").innerText
        date = date.replace("février", "feb").replace("décembre", "dec").replace("août", "aug").replace("juillet", "july").replace("avril", "apr").replace("juin", "june").replace("mai", "may")
        date = new Date(date).toLocaleDateString()
        if (date == "Invalid Date"){
          date = list.querySelector(".listTop").innerText.replace(",","")
        }
        
        list.querySelectorAll('.obs_level_2_i_content').forEach(function(obs_2){
          if (obs_2.querySelector(".listSubmenu")){
            let place = obs_2.querySelector(".listSubmenu").innerText;
            let place_link = obs_2.querySelector(".listSubmenu a").href;
            obs_2.querySelectorAll('.observation_container').forEach(function(obs){
              var d = [];
              d.push(date) //date
              d.push(place) //place
              d.push(place_link)
              d.push(obs.querySelector(".sighting_count").innerText.trim()) //number
              d.push(obs.querySelectorAll('b')[0].innerText) // common name
              d.push(obs.querySelectorAll('.sci_name')[0].innerText.replace("(","").replace(")","")) //latin
              d.push(Array.from(obs.querySelectorAll(".remark")).map(v => v.innerText.replace("\n","").replace(",",";")).filter(v => v.length>0).join(" | ")) // remark
              //d.push(row.querySelectorAll('.col-sm-4')[1].innerText) //observer
              //d.push(row.querySelectorAll('a')[0].href) // link observations
              data.push(d)
            })
          }
        })
      })
    } else {
      console.log('error')
    }

    if (data.length > 1) {
      var csvContent = "data:text/csv;charset=utf-8,\ufeff";
      data.forEach(function (d) {
        csvContent += d.join(",") + "\n";
      });
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", filename + '.csv');
      link.click();
    } else {
      alert("No data to download. Make sure the targets list is displayed")
    }
  }
});





