
const detail_btn = document.querySelector('.ReportList-heading > button')
console.log(detail_btn)
if (detail_btn) {
    detail_btn.insertAdjacentHTML('beforeBegin', `
<a href="#" class="Button Button--small Button--hollow" style="margin-left: 4px; margin-bottom: 0;" id="zoziology-target2csv">
  <svg class="Icon Icon--download u-inline-xs" role="presentation"><use xlink:href="#Icon--download"></use></svg>
  <span class="u-showForMedium">Download (csv)</span>
</a>`)
}

document.addEventListener("click", function (e) {
    const target = e.target.closest("#zoziology-target2csv");
    if (target) {
        const filename = document.querySelector(".ReportTitle-name").innerText.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        var data = [];
        // Add header
        data.push(['species_code', 'common_name', 'scientific_name', 'count', 'checklists', 'media'])
        // Add column
        Array.from(document.getElementsByClassName('ReportListSpecies')).forEach(function (res) {
            var d = [];
            d.push(res.id)
            d.push(res.getElementsByClassName('Species-common')[0].innerText); //name
            d.push(res.getElementsByClassName('Species-sci')[0].innerText); //latin
            d.push(res.getElementsByClassName('ReportListSpecies-count')[0].innerText); // rank
            const info = Array.from(res.getElementsByClassName('ReportListSpecies-metaSummary-items-item')).reduce((obj, e) => {
                const tmp = e.innerText.split("\n")
                obj[tmp[0]] = tmp[1]
                return obj
            }, { Media: 0, Checklists: null })
            d.push(info.Checklists);
            d.push(info.Media);
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