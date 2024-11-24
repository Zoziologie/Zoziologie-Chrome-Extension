var all_els = document.querySelectorAll(".SectionMenu-section-list");
var els = all_els[all_els.length - 1];
if (els) {
  const href = window.location.href;
  const match = href.match(/region\/([A-Z0-9-]+)/);

  if (match) {
    const code_raw = match[1];
    const code_split = code_raw.split("-").slice(0, 2);
    const code =
      code_split.length == 1
        ? code_split[0]
        : ["US", "CA"].includes(code_split[0])
        ? code_split[0] + "-" + code_split[1]
        : code_split[0];
    els.insertAdjacentHTML(
      "beforeend",
      `
    <li>
    <a href="https://zoziologie.raphaelnussbaumer.com/global-rare-ebird/?mode=r&r=${code}&t=1">
      <span><b>Rare Bird Map</a></span>
    </a>
  </li>`
    );
  } else {
    console.warn("No code found in the URL.");
  }
}
