const detail_btn = document.querySelector(".ReportMetaTools");
if (detail_btn) {
  detail_btn.insertAdjacentHTML(
    "beforeEnd",
    `<button class="Button Button--reverse Button--small Button--hollow" id="zoziology-target2csv"><svg class="Icon Icon--download u-inline-xs" role="presentation"><use xlink:href="#Icon--download"></use></svg>
    <span class="u-showForMedium">Download (csv)</span></button>`
  );
}

document.addEventListener("click", function (e) {
  const target = e.target.closest("#zoziology-target2csv");
  if (target) {
    fetch(
      "https://ebird.org/tripreport-internal/v1/taxon-list/" +
        window.location.pathname.split("tripreport/")[1]
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 1) {
          data = data.map((e) => {
            e.exoticCategory = e.exoticCategory || "";
            e.isPhotoLifer = e.isPhotoLifer || false;
            e.isAudioLifer = e.isAudioLifer || false;
            return e;
          });
          const header = Object.keys(data[0]);
          const array = data.map((it) => header.map((h) => it[h].toString()));
          array.unshift(header);
          const csvContent = "\uFEFF" + array.join("\n");
          const encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
          var link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          const filename = document
            .querySelector(".ReportTitle-name")
            .innerText.replace(/[^a-z0-9]/gi, "_")
            .toLowerCase()
            .substring(0, 190);
          link.setAttribute("download", filename + ".csv");
          link.click();
        } else {
          alert("No data to download. Make sure the targets list is displayed");
        }
      });
  }
});
