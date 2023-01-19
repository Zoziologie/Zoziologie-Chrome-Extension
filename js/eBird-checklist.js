document.querySelectorAll('.Observation').forEach(function (e) {
  e.getElementsByClassName("Observation-species")[0].
    insertAdjacentHTML("afterend", `
      <div style="grid-column: 5/6;">
        <a class="zoziology-ebird-link" value="${e.id}">
					<svg class="Icon Icon--link Icon--sm" role="presentation"><use xlink:href="#Icon--link"></use></svg>
					<span class="is-visuallyHidden">Copy link</span>
				</a>
      </div>`)
});

var els = document.querySelectorAll("a[href='#tracks-info-panel']");
if (els.length > 0) {
  els[0].
    insertAdjacentHTML("afterend", `
  <a id="zoziology-ebird-gps" class="Button Button--tiny Button--hollow u-margin-none u-showForMedium" style="padding: .25rem .4rem;" href="#">
  Download
</a>`)
}

document.addEventListener("click", function (e) {
  const target = e.target.closest(".zoziology-ebird-link");
  if (target) {
    if (document.querySelector('#copied')) {
      document.querySelector('#copied').remove()
    }
    navigator.clipboard.writeText(text).then(function () {
      //alert('URL copied to clipboard: ' + text);
      e.target.insertAdjacentHTML('afterend', '<span id="copied" style="color: #1c6900;font-size: .88rem;"><svg alt="" aria-hidden="true" class="Icon Icon--check Icon--sm"><use xlink:href="#Icon--check"></use></svg><span style="margin-left:2px;">Copied to clipboard.</span></span>')
    });
  }

  // GPS
  const target2 = e.target.closest("#zoziology-ebird-gps");
  if (target2) {
    const text = window.location.pathname.split("/")[0];
    const coord = document.getElementsByClassName('Track')[0].getAttribute("data-maptrack-data")
    const path = coord.split(",").reduce((acc, e, i, arr) => {
      if ((i % 2) === 0) {
        acc.push([+e, +arr[i + 1]])
      }
      return acc
    }, [])
    const geojson = `
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": ${JSON.stringify(path)},
            "type": "LineString"
          }
        }
      ]
    }`
    if (geojson.length > 1) {
      const filename = window.location.pathname.split("/").pop();
      var link = document.createElement("a");
      link.setAttribute("href", encodeURI("data:text/json;charset=utf-8," + geojson));
      link.setAttribute("download", filename + '.geojson');
      link.click();
    } else {
      alert("No data to download. Make sure the targets list is displayed")
    }
  }
});


