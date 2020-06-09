'use strict';
var script = document.createElement('script');
script.type = 'text/javascript';
script.innerText='\
function copyChecklistLinkSpecies(id){\
  text = window.location.href.split("#")[0] + "#" + id;\
  window.location.href = text; \
  dummy = document.createElement("textarea");\
  document.body.appendChild(dummy);\
  dummy.value = text;\
  dummy.select();\
  document.execCommand("copy");\
  document.body.removeChild(dummy);\
}\
'
document.getElementsByTagName('head')[0].appendChild(script);

document.querySelectorAll('.Observation').forEach(function(e) {
  e.getElementsByClassName('Observation-species')[0].getElementsByClassName('Heading')[0].insertAdjacentHTML('beforeend','\
  <a class="u-inset-xs" onclick="copyChecklistLinkSpecies(\''+e.id+'\')">\
						<svg class="Icon Icon--link Icon--sm" role="presentation"><use xlink:href="#Icon--link"></use></svg>\
						<span class="is-visuallyHidden">Copy link</span>\
					</a>')
});


