
var els = document.querySelectorAll("#subnav-explore")[0].nextElementSibling;
if (els) {
  const href = window.location.href;
  const code_split = href.substring(href.lastIndexOf('/') + 1).split("?")[0].split("-").slice(0, 2);
  const code = code_split.length == 1 ? code_split[0] : (["US", "CA"].includes(code_split[0]) ? code_split[0] + "-" + code_split[1] : code_split[0]);
  els.
    insertAdjacentHTML("beforeend", `
    <li>
    <a href="https://zoziologie.raphaelnussbaumer.com/global-rare-ebird/?mode=r&r=${code}&t=1">
      <span><b>Rare Bird Map</a></span>
    </a>
  </li>`)
} 