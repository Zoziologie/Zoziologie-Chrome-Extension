
const print_btn = document.querySelector('.Button.Button--small.Button--hollow')

if (print_btn) {
  document.querySelector('.Button.Button--small.Button--hollow').parentElement.insertAdjacentHTML('beforeend', `
<a href="#" class="Button Button--small Button--hollow" style="margin-left: 2px;" id="zoziology-target2csv">
  <svg class="Icon Icon--download u-inline-xs" role="presentation"><use xlink:href="#Icon--download"></use></svg>
  <span class="u-showForMedium">Download (csv)</span>
</a>`)
}

document.addEventListener("click", function (e) {
  const target = e.target.closest("#zoziology-target2csv");
  if (target) {
    const filename = window.location.href.split("?")[1]
    var data = [];
    // Add header
    data.push(['rank', 'common_name', 'scientific_name', 'frequency', 'link_map'])
    // Add column
    Array.from(document.getElementsByClassName('ResultsStats')).forEach(function (res) {
      var d = [];
      d.push(res.getElementsByClassName('ResultsStats-index')[0].innerHTML.split('.')[0]); // rank
      d.push(res.getElementsByClassName('SpecimenHeader-joined')[0].getElementsByTagName('a')[0].innerHTML.split('<em')[0].replace(/\r?\n|\r/g, '').replace(/\t/g, '')); //name
      d.push(res.getElementsByClassName('SpecimenHeader-joined')[0].getElementsByTagName('a')[0].getElementsByTagName('em')[0].innerText); //latin
      d.push(res.getElementsByClassName('StatsIcon-stat-count')[0].innerHTML); //
      d.push('https://ebird.org/' + res.getElementsByClassName('ResultsStats-action')[0].innerHTML.split('href="')[1].split('"')[0]); // map
      data.push(d)
    });

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


function toLocationr1(text, id) {
  jQuery('input[name="region"]').val(text)
  jQuery('#targets-region-input-hidden').val(id)
}

function toLocation(r, text, id) {
  if (r == "r1") {
    jQuery('input[name="region"]').val(text)
    jQuery('#targets-region-input-hidden').val(id)
  } else if (r == "r2") {
    // add option
    jQuery('#targets-comparison-region').append($('<option>', {
      value: id,
      text: text,
      selected: true
    }));
  }
}