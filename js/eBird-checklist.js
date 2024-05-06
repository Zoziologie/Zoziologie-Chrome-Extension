document.querySelectorAll(".Observation").forEach(function (e) {
  e.getElementsByClassName("Observation-species")[0].insertAdjacentHTML(
    "afterend",
    `
      <div style="grid-column: 5/6;">
        <a class="zoziology-ebird-link" value="${e.id}">
					<svg class="Icon Icon--link Icon--sm" role="presentation"><use xlink:href="#Icon--link"></use></svg>
					<span class="is-visuallyHidden">Copy link</span>
				</a>
      </div>`
  );
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".zoziology-ebird-link");
  if (target) {
    const text = window.location.href.split("#")[0] + "#" + target.getAttribute("value");
    if (document.querySelector("#copied")) {
      document.querySelector("#copied").remove();
    }
    navigator.clipboard.writeText(text).then(function () {
      //alert('URL copied to clipboard: ' + text);
      e.target.insertAdjacentHTML(
        "afterend",
        '<span id="copied" style="color: #1c6900;font-size: .88rem;"><svg alt="" aria-hidden="true" class="Icon Icon--check Icon--sm"><use xlink:href="#Icon--check"></use></svg><span style="margin-left:2px;">Copied to clipboard.</span></span>'
      );
    });
  }
});

var els2 = document.querySelector(
  "#main > div.Page-section.Page-section--primaryLight.Page-section--grid-heading > div > div > div:nth-child(2) > section > div > div.GridFlex-cell.u-sizeFill > div.GridFlex.GridFlex--alignMiddle > div > div > a"
);
if (els2) {
  const locid = els2.href.split("locID=")[1].split("&")[0];
  els2.insertAdjacentHTML(
    "afterend",
    `
  <a href="/mylocations/edit/${locid}" class="Button Button--tiny Button--hollow u-showForMedium" style="align-self:center; flex-shrink:0; padding:.25rem .4rem; margin-left:5px; margin-bottom:0px;">
  Manage Location
</a>`
  );
  var els3 = document.querySelector("#checklist-tools");
  els3.querySelectorAll("li")[3].insertAdjacentHTML(
    "afterend",
    `
<li>												
<a href="/mylocations/edit/${locid}" class="ToggleDropdown-panel-link">
  <strong>Manage Location</strong>
</a>
</li>`
  );
}
