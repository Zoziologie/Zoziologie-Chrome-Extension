
const detail_btn = document.querySelector('#barchart-display')
if (detail_btn) {
    detail_btn.insertAdjacentHTML('afterBegin', `<button id="zoziology-barchart" style="margin-top:3px; margin-bottom:3px;"><svg class="Icon Icon--download u-inline-xs" role="presentation"><use xlink:href="#Icon--download"></use></svg>
    <span>Download (csv)</span></button>`)
}

const week = ["Jan1", "Jan2", "Jan3", "Jan4", "Feb1", "Feb2", "Feb3", "Feb4", "Mar1", "Mar2", "Mar3", "Mar4", "Apr1", "Apr2", "Apr3", "Apr4", "May1", "May2", "May3", "May4", "Jun1", "Jun2", "Jun3", "Jun4", "Jul1", "Jul2", "Jul3", "Jul4", "Aug1", "Aug2", "Aug3", "Aug4", "Sept1", "Sept2", "Sept3", "Sept4", "Oct1", "Oct2", "Oct3", "Oct4", "Nov1", "Nov2", "Nov3", "Nov4", "Dec1", "Dec2", "Dec3", "Dec4"];
const header = ["speciesCode", "commonName", "sciName"];
const header_new = ["species_code", "common_name", "scientific_name"];

document.addEventListener("click", function (e) {
    const target = e.target.closest("#zoziology-barchart");
    if (target) {
        const url = "https://ebird.org/barchartData?" + window.location.href.split("?")[1] + "&fmt=json"
        const filename = "barchartData_" + window.location.href.split("?")[1]
        fetch(url).then((response) => response.json())
            .then((data) => {
                if (data.dataRows.length > 1) {
                    var json = data.dataRows.map(r => {
                        return { ...r.values.reduce((a, v, i) => ({ ...a, [week[i]]: v }), {}), ...header.reduce((a, v, i) => ({ ...a, [header_new[i]]: r.taxon[v] }), {}) };
                    })
                    json.unshift({ ...data.dataRows[0].values_N.reduce((a, v, i) => ({ ...a, [week[i]]: v }), {}), ...header.reduce((a, v, i) => ({ ...a, [header_new[i]]: "" }), {}) })
                    var fields = [...header_new, ...week];
                    var replacer = function (key, value) { return value === null ? '' : value }
                    var csv = json.map(function (row) {
                        return fields.map(function (fieldName) {
                            return JSON.stringify(row[fieldName], replacer)
                        }).join(',')
                    })
                    csv.unshift(fields.join(',')) // add header column
                    csv = csv.join('\r\n');
                    var encodedUri = encodeURI("data:text/csv;charset=utf-8," + csv);
                    var link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", filename + '.csv');
                    link.click();
                } else {
                    alert("No data to download. Make sure the targets list is displayed")
                }
            });


    }
});