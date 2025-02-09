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
          return Object.values(it).join(",").toString();
        })
        .join("\n");

      const csvContent = "\uFEFF" + array; // Adding BOM for proper UTF-8 encoding
      const encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);

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

// Find the .GridFlex-cell that contains the select element
const container = document.querySelector("#targets-comparison-region").closest(".GridFlex-cell");

// Create a wrapper div for flex alignment
const wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.gap = "8px"; // Adds spacing between elements

// Move the select element inside the wrapper
const select = document.getElementById("targets-comparison-region");
select.parentNode.insertBefore(wrapper, select);
wrapper.appendChild(select);

// Create the button
const button = document.createElement("button");
button.className = "Button";
button.style.padding = "0.5em 1em";
button.setAttribute("type", "button");
button.innerHTML = `
    <svg role="presentation" class="Icon Icon--search">
        <use xlink:href="#Icon--search"></use>
    </svg>
`;

// Append the button inside the wrapper
wrapper.appendChild(button);

const searchContainer = document.createElement("div");
searchContainer.className = "Suggest";
searchContainer.style.display = "none";
searchContainer.innerHTML = `
<div role="combobox" aria-expanded="false" class="Suggest-container">
  <div class="Suggest-icon">
    <svg role="presentation" class="Icon Icon--search">
      <use xlink:href="#Icon--search"></use>
    </svg>
  </div> 
  <div class="Suggest-inputContainer">
    <input type="text" name="region" id="region-search" placeholder="Enter a region" dir="auto" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-labelledby="targets-region-input" class="Suggest-input">
  </div> 
  <div class="Suggest-reset">
    <button type="button" id="clear-search">
      <svg role="presentation" class="Icon Icon--close">
        <use xlink:href="#Icon--close"></use>
      </svg> 
      <span class="is-visuallyHidden">Clear</span>
    </button>
  </div> 
  <div role="listbox" id="Suggest-dropdown" class="Suggest-dropdown" style="display: none;">
    <div class="Suggest-suggestions" id="Suggest-dropdown-inner" > 
      <div class="Suggest-empty">
        <span>No Matches</span>
      </div>
    </div>
  </div>
</div>
  `;

// Insert the search bar below the button
container.appendChild(searchContainer);

const input = searchContainer.querySelector("#region-search");
const dropdown = searchContainer.querySelector("#Suggest-dropdown");
const dropdown_inner = searchContainer.querySelector("#Suggest-dropdown-inner");
const selectTarget = document.getElementById("targets-comparison-region");

// Event listener for search input
input.addEventListener("input", function () {
  const query = input.value.trim();
  if (query.length > 2) {
    fetchRegions(query);
  } else {
    dropdown_inner.innerHTML = "";
  }
});

// Clear input when reset button is clicked
searchContainer.querySelector("#clear-search").addEventListener("click", function () {
  input.value = "";
  dropdown_inner.innerHTML = "";
});

// Add event listener to button
button.addEventListener("click", () => {
  searchContainer.style.display = searchContainer.style.display === "none" ? "block" : "none";
});

// Function to fetch search results from eBird API
function fetchRegions(query) {
  const apiKey = "jfekjedvescr"; // Replace with your actual API key
  const url = `https://api.ebird.org/v2/ref/region/find?key=${apiKey}&q=${encodeURIComponent(
    query
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dropdown.style.display = "block";

      console.log(dropdown_inner);

      dropdown_inner.innerHTML = ""; // Clear old results
      if (data.length === 0) {
        dropdown_inner.innerHTML = "<span class='Suggestion-text'>No results found</span>";
        return;
      }

      data.forEach((region) => {
        console.log(region);
        const suggestion = document.createElement("div");
        suggestion.className = "Suggest-suggestion";
        suggestion.setAttribute("role", "option");
        suggestion.innerHTML = `<span class="Suggestion-text">${region.name}</span>`;
        suggestion.addEventListener("click", function () {
          document.getElementById("region-search").value = region.name;
          dropdown_inner.innerHTML = ""; // Hide suggestions after selection
          dropdown.style.display = "none";
          // Create a new option
          const newOption = document.createElement("option");
          newOption.value = region.code; // Set the value
          newOption.textContent = region.name; // Set the text
          newOption.selected = true;
          selectTarget.appendChild(newOption);
        });
        dropdown_inner.appendChild(suggestion);
      });
    })
    .catch((error) => console.error("Error fetching regions:", error));
}
