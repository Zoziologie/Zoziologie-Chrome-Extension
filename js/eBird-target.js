const print_btn = document.querySelector(".Button.Button--small.Button--hollow");

if (print_btn) {
  print_btn.parentElement.insertAdjacentHTML(
    "beforeend",
    `
<a href="#" class="Button Button--small Button--hollow" style="margin-left: 2px;" id="zoziology-target2csv">
  <svg class="Icon Icon--download u-inline-xs" role="presentation"><use xlink:href="#Icon--download"></use></svg>
  <span class="u-showForMedium">Download (csv)</span>
</a>`
  );
}

document.addEventListener("click", function (e) {
  const target = e.target.closest("#zoziology-target2csv");
  if (target) {
    const category = ["native-and-naturalized", "exotic-provisional", "exotic-escapee", "hybrids"];
    const data = category
      .map((cat) => {
        return Array.from(document.querySelectorAll('[aria-labelledby="' + cat + '"] ol li')).map(
          (res) => {
            return {
              rank: res.querySelector(".ResultsStats-index span")
                ? res.querySelector(".ResultsStats-index span").innerText.split(".")[0]
                : "",
              speciesCode: res
                .querySelector(".ResultsStats-action a")
                .href.split("/map/")[1]
                .split("?")[0],
              commonName: res
                .querySelector(".SpecimenHeader-joined" + (cat == "hybrids" ? "" : " a"))
                .innerHTML.replace(/\r?\n|\r/g, "")
                .replace(/\t/g, "")
                .split(" <em")[0],
              sciName: res.querySelector(
                ".SpecimenHeader-joined" + (cat == "hybrids" ? "" : " a") + " em"
              )
                ? res.querySelector(
                    ".SpecimenHeader-joined" + (cat == "hybrids" ? "" : " a") + " em"
                  ).innerText
                : "",
              frequency: res.querySelector(".ResultsStats-stats .Heading").innerText,
              exoticCategory: res.querySelector(".ResultsStats-title button")
                ? res.querySelector(".ResultsStats-title button").title.split("Exotic: ")[1]
                : "Native",
            };
          }
        );
      })
      .flat();

    if (data.length > 1) {
      const array = [Object.keys(data[0])]
        .concat(data)
        .map((it) => {
          return Object.values(it).toString();
        })
        .join("\n");
      var csvContent = "data:text/csv;charset=utf-8," + array;
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      const filename = window.location.href.split("?")[1].substring(0, 190);
      link.setAttribute("download", filename + ".csv");
      link.click();
    } else {
      alert("No data to download. Make sure the targets list is displayed");
    }
  }
});
