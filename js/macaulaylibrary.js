var url = new URL(window.location.href);
document.querySelector('.actions').insertAdjacentHTML('beforeend', `
    <a class="Button--link" href="https://cdn.download.ams.birds.cornell.edu/api/v1${url.pathname}/2400" target="_blank">
      <svg class="Icon Icon--jumpDown" role="presentation"><use xlink:href="#Icon--jumpDown"></use></svg>
			<span>Download 2400</span>
		</a>`)