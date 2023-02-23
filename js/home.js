const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleBtn = $(".fa-sun");
const body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
	toggleBtn.classList.replace("fa-sun", "fa-moon");
	body.classList.add("dark");
	localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
	toggleBtn.classList.replace("fa-moon", "fa-sun");
	body.classList.remove("dark");
	localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
	enableDarkMode();
}

toggleBtn.onclick = () => {
	darkMode = localStorage.getItem("dark-mode");
	if (darkMode === "disabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
};

// const playLists = $$(".playlist h4");

// playLists.forEach((item) => {
// 	item.onclick = function () {
// 		$(".playlist .active").classList.remove("active");
// 		this.classList.add("active");
// 	};
// });

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
	const pane = panes[index];

	tab.onclick = function () {
		$(".tab-item.active").classList.remove("active");
		$(".tab-pane.active").classList.remove("active");

		this.classList.add("active");
		pane.classList.add("active");
	};
});

const tabsLeft = $$(".tab_item-left");
const panesMid = $$(".tab_pane-nav");
const contentsMid = $$(".content");

tabsLeft.forEach((tabLeft, index) => {
	const paneMid = panesMid[index];
	const contentMid = contentsMid[index];

	tabLeft.onclick = function () {
		$(".tab_item-left.active").classList.remove("active");
		$(".tab_pane-nav.active").classList.remove("active");
		$(".content.active").classList.remove("active");

		this.classList.add("active");
		paneMid.classList.add("active");
		contentMid.classList.add("active");
	};

	panesMid.forEach((pane, index) => {
		const tabLeft = tabsLeft[index];
		const contentMid = contentsMid[index];

		pane.onclick = function () {
			$(".tab_item-left.active").classList.remove("active");
			$(".tab_pane-nav.active").classList.remove("active");
			$(".content.active").classList.remove("active");

			this.classList.add("active");
			tabLeft.classList.add("active");
			contentMid.classList.add("active");
		};
	});
});
