
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
        <em class="export_link async_download bi bi-txt" style="margin-right: 0.2rem;vertical-align:middle;cursor:pointer;" href="#" id="zoziology-export" title="Télécharger un export en texte tabulé"></em>
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
    const filename = window.location.href.split("?")[1]
    if (url.searchParams.get("sp_FChoice") == 'species') {
      var data = [];

      // Add header
      data.push(['number', 'common_name', 'scientific_name', 'latest_date', 'breeding', 'link_observation', 'link_stat', 'link_info'])


      // Add column
      Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function (row) {
        var d = [];
        d.push(parseInt(row.getElementsByClassName('text-right col-sm-1')[0].innerHTML)) //number
        d.push(row.querySelectorAll('b')[0].innerText) // English
        d.push(row.querySelectorAll('i')[0].innerText) //latin

        d.push(row.querySelectorAll('i')[1].innerText) //Date latest sighting
        row.querySelectorAll('i')[2] ? d.push(row.querySelectorAll('i')[2].innerText) : d.push("") // nidification if available
        d.push(row.querySelectorAll('a')[0].href) // link observations
        row.querySelectorAll('a')[1] ? d.push(row.querySelectorAll('a')[1].href) : d.push("") // link statistic 
        row.querySelectorAll('a')[2] ? d.push(row.querySelectorAll('a')[2].href) : d.push("") // link information.

        data.push(d)
      })
    } else if (url.searchParams.get("sp_FChoice") == 'synth') {
      var data = [];

      // Add header
      data.push(['number', 'common_name', 'observers', 'places', 'link_observations', 'link_stat', 'link_info', 'photo'])

      // Add column
      Array.from(document.querySelectorAll('.rowlight, .rowdark')).forEach(function (row) {
        var d = [];
        d.push(row.querySelectorAll('span')[0].innerHTML.split('&nbsp;')[1]) //number
        d.push(row.querySelectorAll('b')[0].innerText) // English
        d.push(row.querySelectorAll('.col-sm-4')[1].innerText) //observer
        d.push(row.querySelectorAll('.col-sm-4')[2].innerText) //places
        d.push(row.querySelectorAll('a')[0].href) // link observations
        row.querySelectorAll('a')[1] ? d.push(row.querySelectorAll('a')[1].href) : d.push("") // link statistic 
        row.querySelectorAll('a')[2] ? d.push(row.querySelectorAll('a')[2].href) : d.push("") // link information.
        row.querySelectorAll('a')[3] ? d.push(row.querySelectorAll('a')[3].href) : d.push("") // link information.

        data.push(d)
      })
    } else {
      console.log('error')
      exit
    }

    if (data.length > 1) {
      var csvContent = "data:text/csv;charset=utf-8,";
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





