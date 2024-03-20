const tabLinks = document.getElementsByClassName('tab-bar-link');

const urlAnchor = document.URL.split('#')[1];
let currentTab = urlAnchor ? 
	tabLinks.namedItem('link-' + urlAnchor.split('_')[0])
	: tabLinks[0];

currentTab.classList.remove('full-button-link');
currentTab.classList.add('visible');
document.getElementById('wrapper-' + currentTab.dataset.anchor).classList.add('visible');

for (let tabLink of tabLinks) {
	tabLink.onclick = () => {

		if (tabLink.id === currentTab.id) {
			if (window.innerWidth <= 1100) {
				tabBar.classList.toggle('collapsed');
			}
		} else {
			currentTab.classList.add('full-button-link');
			currentTab.classList.remove('visible');
			document.getElementById('wrapper-' + currentTab.dataset.anchor)
				.classList.remove('visible');

			currentTab = tabLink;

			currentTab.classList.remove('full-button-link');
			currentTab.classList.add('visible');
			document.getElementById('wrapper-' + currentTab.dataset.anchor)
				.classList.add('visible');

			if (window.innerWidth <= 1100) {
				tabBar.classList.add('collapsed');
			}
		}
	}
}


const tabBar = document.getElementById('tab-bar');

// window.addEventListener('resize', () => {
// 	if (window.innerWidth <= 1100) {
// 		if (!tabBar.classList.contains('collapsed')) {
// 			tabBar.classList.add('collapsed');
// 		}
// 	} else {
// 		tabBar.classList.remove('collapsed');
// 	}
// });

