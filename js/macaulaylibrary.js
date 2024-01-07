var url = new URL(window.location.href);
var isSound = document.body.innerText.toLowerCase().includes("microphone")

document.querySelector('.actions').insertAdjacentHTML('beforeend', `
    <a class="Button--link" href="https://cdn.download.ams.birds.cornell.edu/api/v1${url.pathname}${isSound ? "": "/2400"}" target="_blank">
      <svg class="Icon Icon--jumpDown" role="presentation"><use xlink:href="#Icon--jumpDown"></use></svg>
			<span>Download ${isSound ? "sound": "2400px"}</span>
		</a>`)