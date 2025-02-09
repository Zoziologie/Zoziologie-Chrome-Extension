const detail_btn = document.querySelector(".ReportMetaTools");
if (detail_btn) {
  detail_btn.insertAdjacentHTML(
    "beforeEnd",
    `
<div tabindex="-1" class="Dropdown">
   <span tabindex="-1" class="Dropdown-heading">
      <button class="Button Button--reverse Button--small Button--hollow">
         <svg alt="" aria-hidden="true" class="Icon Icon--download">
            <use xlink:href="#Icon--download"></use>
         </svg>
         <span class="u-showForMedium">Download (csv)</span>
         <svg alt="" aria-hidden="true" class="Icon Icon--triangleDown">
            <use xlink:href="#Icon--triangleDown"></use>
         </svg>
         <!---->
      </button>
      <span class="Dropdown-closer"></span>
   </span>
   <div tabindex="-1" class="Dropdown-panel">
      <ul class="u-unlist">
      <li>
            <a href="" class="zoziology-tripreport" id="zoziology-tripreport-checklist">Checklist Level
              <div class="LoadingAnimation LoadingAnimation--small" style="display: none;">
                <svg alt="" aria-hidden="true" class="Icon Icon--spinner"><use xlink:href="#Icon--spinner"></use></svg>
              </div> 
            </a>
         </li>
        <li>
            <a href="" class="zoziology-tripreport" id="zoziology-tripreport-species">Species Level
              <div class="LoadingAnimation LoadingAnimation--small" style="display: none;">
                <svg alt="" aria-hidden="true" class="Icon Icon--spinner"><use xlink:href="#Icon--spinner"></use></svg>
              </div> 
            </a>
         </li>
         <li>
          <a href="" class="zoziology-tripreport" id="zoziology-tripreport-observation">Observations Level
            <div class="LoadingAnimation LoadingAnimation--small" style="display: none;">
              <svg alt="" aria-hidden="true" class="Icon Icon--spinner"><use xlink:href="#Icon--spinner"></use></svg>
            </div> 
          </a>
        </li>
      </ul>
   </div>
</div>
  `
  );
}

document.addEventListener("click", async function (e) {
  const target = e.target.closest(".zoziology-tripreport");

  if (!target) return; // Exit if the click is outside the target elements
  e.preventDefault();

  // Get the spinner inside the clicked link
  const spinner = target.querySelector(".LoadingAnimation");
  if (!spinner) return; // If no spinner found, exit

  // Show the spinner by removing the 'hidden' class
  spinner.style.display = "inline-block";

  try {
    const pathParts = window.location.pathname.split("tripreport/")[1].split("/");
    const tripReportId = pathParts[0];
    const tripReportPersonId = pathParts[1];

    if (target.id == "zoziology-tripreport-checklist") {
      const urlList = tripReportPersonId
        ? `https://ebird.org/tripreport-internal/v1/checklists/${tripReportId}?tripReportPersonId=${tripReportPersonId}`
        : `https://ebird.org/tripreport-internal/v1/checklists/${tripReportId}`;

      const response = await fetch(urlList);
      const data = await response.json();

      const dataFlat = data.map(({ loc, ...d }) => ({
        ...d,
        ...loc, // Spread the properties of loc into the parent object
      }));

      downloadCSV(dataFlat.flat(), "checklists");
    } else {
      const urlList = tripReportPersonId
        ? `https://ebird.org/tripreport-internal/v1/taxon-list/${tripReportId}?tripReportPersonId=${tripReportPersonId}`
        : `https://ebird.org/tripreport-internal/v1/taxon-list/${tripReportId}`;

      const response = await fetch(urlList);
      const data = await response.json();

      if (data.length > 1) {
        data.forEach((e) => {
          e.exoticCategory = e.exoticCategory || "";
          e.isPhotoLifer = e.isPhotoLifer || false;
          e.isAudioLifer = e.isAudioLifer || false;
        });

        if (target.id == "zoziology-tripreport-observation") {
          // Fetch details in parallel using Promise.all
          const detailedData = await Promise.all(
            data.map(async (e) => {
              const pathParts = window.location.pathname.split("tripreport/")[1].split("/");
              const tripReportId = pathParts[0];
              const tripReportPersonId = pathParts[1];

              const url = tripReportPersonId
                ? `https://ebird.org/tripreport-internal/v1/taxon-detail/${tripReportId}/${e.speciesCode}?tripReportPersonId=${tripReportPersonId}`
                : `https://ebird.org/tripreport-internal/v1/taxon-detail/${tripReportId}/${e.speciesCode}`;

              const detailResponse = await fetch(url);
              detail = await detailResponse.json();

              // If checklists exist, create expanded entries
              if (detail.checklists && detail.checklists.length > 0) {
                return detail.checklists.map((checklist) => ({
                  ...e, // Copy all parent fields
                  ...checklist,
                }));
              } else {
                // No checklist, return the parent entry as-is
                return e;
              }
            })
          );
          downloadCSV(detailedData.flat(), "observations");
        } else {
          downloadCSV(data, "species");
        }
      } else {
        alert("No data to download. Make sure the targets list is displayed");
      }
    }
  } finally {
    // Hide the spinner after completion by adding the 'hidden' class
    spinner.style.display = "none";
  }
});

// function to download data as CSV
function downloadCSV(longData, type) {
  const header = Object.keys(longData[0]);
  const array = longData.map((it) =>
    header.map((h) => {
      let value = it[h]?.toString() || "";
      value = value.replace(/[\r\n]+/g, "|");
      if (value.includes(",") || value.includes('"')) {
        value = `"${value.replace(/"/g, '""')}"`; // Escape double quotes and wrap in quotes
      }
      return value;
    })
  );

  array.unshift(header);
  const csvContent = "\uFEFF" + array.map((row) => row.join(",")).join("\n");
  const encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  const filename =
    document
      .querySelector(".ReportTitle-name")
      .innerText.replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()
      .substring(0, 190) +
    "_" +
    type;
  link.setAttribute("download", filename + ".csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
