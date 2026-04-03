// Modify Design of pages
(() => {
  const start = () => {
    // Re-order button on left menu
    const move = (id, type = "bottom") => {
      const element = document.getElementById(id);
      if (element) {
        if (type === "bottom") {
          element.parentNode.appendChild(element);
        } else {
          element.parentNode.prepend(element);
        }
      }
    };

    ["1164", "1364"].forEach((x) => move(x, "bottom"));
    ["8"].forEach((x) => move(x, "top"));

    // Styles handled via CSS at document_start (see css/biolovision-hide.css)

    // Add export button (idempotent)
    const box = document.querySelector(".box.flex-box");
    if (box && !document.querySelector("#zoziology-export")) {
      box.insertAdjacentHTML(
        "beforeend",
        `
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
    `
      );

      // Attach the click event directly to the element
      const exportButton = document.querySelector("#zoziology-export");
      if (exportButton && !exportButton.dataset.bound) {
        exportButton.dataset.bound = "1";
        exportButton.addEventListener("click", function () {
          const url = new URL(window.location.href);
          const query = window.location.search.slice(1);
          const safeBase = (query || document.title || "export")
            .replace(/[\\/:*?"<>|]/g, "_")
            .slice(0, 190);
          const filename = safeBase || "export";
          let data = [];
          if (url.searchParams.get("sp_FChoice") == "species") {
            // Add header
            data.push([
              "number",
              "common_name",
              "scientific_name",
              "latest_date",
              "breeding",
              "link_observation",
              "link_stat",
              "link_info",
            ]);

            // Add column
            Array.from(document.querySelectorAll(".rowlight, .rowdark")).forEach(function (row) {
              var d = [];
              d.push(parseInt(row.getElementsByClassName("text-right col-sm-1")[0].innerHTML)); //number
              d.push(row.querySelectorAll("b")[0].innerText); // English
              var sci_name = row.querySelectorAll(".sci_name");
              if (sci_name.length > 0) {
                d.push(sci_name[0].innerText.replace("(", "").replace(")", "")); //latin
              } else {
                d.push("");
              }

              d.push(row.querySelectorAll("i:not([class])")[0].innerText); //Date latest sighting
              row.querySelectorAll("i")[2]
                ? d.push(row.querySelectorAll("i:not([class])")[1].innerText)
                : d.push(""); // nidification if available
              row.querySelector(".ba-list")
                ? d.push(row.querySelector(".ba-list").parentNode.href)
                : d.push("");
              row.querySelector(".ba-stats")
                ? d.push(row.querySelector(".ba-stats").parentNode.href)
                : d.push("");
              row.querySelector(".ba-info")
                ? d.push(row.querySelector(".ba-info").parentNode.href)
                : d.push("");

              data.push(d);
            });
          } else if (url.searchParams.get("sp_FChoice") == "synth") {
            // Add header
            data.push([
              "number",
              "common_name",
              "observers",
              "place",
              "link_photo",
              "link_observations",
              "link_stat",
              "link_info",
            ]);

            // Add column
            Array.from(document.querySelectorAll(".rowlight, .rowdark")).forEach(function (row) {
              var d = [];
              d.push(row.querySelectorAll("span")[0].innerHTML.split("&nbsp;")[1]); //number
              d.push(row.querySelectorAll("b")[0].innerText); // common name
              d.push(row.querySelectorAll(".col-sm-4")[1].innerText); //observer
              d.push(row.querySelectorAll(".col-sm-4")[2].innerText); //place
              row.querySelector(".fa-camera")
                ? d.push(row.querySelector(".fa-camera").parentNode.href)
                : d.push("");
              row.querySelector(".ba-list")
                ? d.push(row.querySelector(".ba-list").parentNode.href)
                : d.push("");
              row.querySelector(".ba-stats")
                ? d.push(row.querySelector(".ba-stats").parentNode.href)
                : d.push("");
              row.querySelector(".ba-info")
                ? d.push(row.querySelector(".ba-info").parentNode.href)
                : d.push("");
              data.push(d);
            });
          } else if (url.searchParams.get("sp_FChoice") == "list") {
            // Add header
            data.push([
              "date",
              "place",
              "place_link",
              "number",
              "common_name",
              "scientific_name",
              "remark",
            ]);

            // Add column
            document.querySelectorAll(".listContainer").forEach(function (list) {
              let date = list.querySelector(".listTop").innerText;
              date = date
                .replace("février", "feb")
                .replace("décembre", "dec")
                .replace("août", "aug")
                .replace("juillet", "july")
                .replace("avril", "apr")
                .replace("juin", "june")
                .replace("mai", "may");
              date = new Date(date).toLocaleDateString();
              if (date == "Invalid Date") {
                date = list.querySelector(".listTop").innerText.replace(",", "");
              }

              list.querySelectorAll(".obs_level_2_i_content").forEach(function (obs_2) {
                if (obs_2.querySelector(".listSubmenu")) {
                  let place = obs_2.querySelector(".listSubmenu").innerText;
                  let place_link = obs_2.querySelector(".listSubmenu a").href;
                  obs_2.querySelectorAll(".observation_container").forEach(function (obs) {
                    var d = [];
                    d.push(date); //date
                    d.push(place); //place
                    d.push(place_link);
                    d.push(obs.querySelector(".sighting_count").innerText.trim()); //number
                    d.push(obs.querySelectorAll("b")[0].innerText); // common name
                    d.push(
                      obs
                        .querySelectorAll(".sci_name")[0]
                        .innerText.replace("(", "")
                        .replace(")", "")
                    ); //latin
                    d.push(
                      Array.from(obs.querySelectorAll(".remark"))
                        .map((v) => v.innerText.replace("\n", "").replace(",", ";"))
                        .filter((v) => v.length > 0)
                        .join(" | ")
                    ); // remark
                    //d.push(row.querySelectorAll('.col-sm-4')[1].innerText) //observer
                    //d.push(row.querySelectorAll('a')[0].href) // link observations
                    data.push(d);
                  });
                }
              });
            });
          }

          if (data.length > 1) {
            var csvContent = "data:text/csv;charset=utf-8,\ufeff";
            data.forEach(function (d) {
              csvContent += d.join(",") + "\n";
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", filename + ".csv");
            link.click();
          } else {
            alert("No data to download. Make sure the targets list is displayed");
          }
        });
      }
    }

    // Extra tools: open grid link when on module 620
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("m_id") === "620") {
      document.querySelector(".box")?.remove();
      document.querySelector(".no_access")?.remove();

      const loadingDiv = document.querySelector("#gsearch");

      if (loadingDiv && !document.querySelector("#zoziology-grid-open")) {
        loadingDiv.insertAdjacentHTML(
          "afterend",
          `
      <em class="export_link bi bi-txt" style="margin-right: 0.2rem;vertical-align:middle;cursor:pointer;" id="zoziology-grid-open"></em>
      `
        );

        const exportButton = document.querySelector("#zoziology-grid-open");
        if (exportButton && !exportButton.dataset.bound) {
          exportButton.dataset.bound = "1";
          exportButton.addEventListener("click", function () {
            const polygonSpan = document.querySelector("#polygon_code_name");
            const gsearchLink = document.querySelector("#gsearch a");

            if (polygonSpan && gsearchLink) {
              const polygonCode = polygonSpan.textContent.trim();
              if (polygonCode) {
                const queryUrl = `index.php?m_id=63&backlink=skip&content=grid&query=${polygonCode}`;

                fetch(queryUrl)
                  .then((response) => response.text())
                  .then((xmlText) => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
                    const firstNameElement = xmlDoc.querySelector("name");

                    if (firstNameElement) {
                      const idValue = firstNameElement.getAttribute("id");

                      let searchUrl = new URL(gsearchLink.href);

                      // Modify parameters
                      searchUrl.searchParams.set("sp_PChoice", "grid");
                      searchUrl.searchParams.set("sp_Grid_Info", polygonCode);
                      searchUrl.searchParams.set("sp_Grid", idValue);
                      searchUrl.searchParams.delete("sp_Polygon");

                      // If sp_S=0, set sp_SChoice=all
                      if (searchUrl.searchParams.get("sp_S") === "0") {
                        searchUrl.searchParams.set("sp_SChoice", "all");
                      }
                      // Open modified link in new tab
                      window.open(searchUrl.toString(), "_blank");

                      //index.php?m_id=94&sp_tg=1&showback=stor&sp_DChoice=range&sp_DFrom=01.01.2025&sp_DTo=31.12.2025&sp_SChoice=species&sp_S=0&sp_PChoice=grid&&sp_Grid_Info=E085N655&sp_Grid=4512
                    } else {
                      console.warn("No <name> element found in the XML response.");
                    }
                  })
                  .catch((error) => console.error("Error fetching XML:", error));
              } else {
                console.warn("Polygon code is empty.");
              }
            } else {
              console.warn("Polygon span not found.");
            }
          });
        }
      }
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  // Re-apply tweaks if the site dynamically injects content (debounced, scoped)
  let moTimer;
  const ensureDynamicBits = () => {
    const box = document.querySelector(".box.flex-box");
    if (box && !document.querySelector("#zoziology-export")) {
      start();
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("m_id") === "620") {
      const loadingDiv = document.querySelector("#gsearch");
      if (loadingDiv && !document.querySelector("#zoziology-grid-open")) {
        start();
      }
    }
  };
  const observer = new MutationObserver(() => {
    if (moTimer) clearTimeout(moTimer);
    moTimer = setTimeout(() => ensureDynamicBits(), 150);
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
