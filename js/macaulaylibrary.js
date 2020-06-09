'use strict';

var url = new URL(window.location.href);
document.querySelector('.UnorderedList').insertAdjacentHTML('beforeend','\
  <li>\
    <a class="Button--link" href="https://test.cdn.download.ams.birds.cornell.edu/api/v1'+url.pathname+'/2400" download="">\
      <svg class="Icon Icon--jumpDown" role="presentation"><use xlink:href="#Icon--jumpDown"></use></svg>\
			<span>Download 2400</span>\
		</a>\
	</li>')

