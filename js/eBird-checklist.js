document.querySelectorAll('.Observation').forEach(function (e) {
  e.
    insertAdjacentHTML('beforeend', `
  <div>
  <a class="zoziology-ebird-link" value="${e.id}">
						<svg class="Icon Icon--link Icon--sm" role="presentation"><use xlink:href="#Icon--link"></use></svg>
						<span class="is-visuallyHidden">Copy link</span>
					</a>
          </div>`)
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".zoziology-ebird-link");
  console.log(target)
  if (target) {
    const text = window.location.href.split("#")[0] + "#" + target.getAttribute("value");
    if (document.querySelector('#copied')) {
      document.querySelector('#copied').remove()
    }
    navigator.clipboard.writeText(text).then(function () {
      //alert('URL copied to clipboard: ' + text);
      e.target.insertAdjacentHTML('afterend', '<span id="copied" style="color: #1c6900;font-size: .88rem;"><svg alt="" aria-hidden="true" class="Icon Icon--check Icon--sm"><use xlink:href="#Icon--check"></use></svg><span style="margin-left:2px;">Copied to clipboard.</span></span>')
    });
  }
});