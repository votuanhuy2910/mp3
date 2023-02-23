const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const toggleBtn = document.getElementById("toggle-btn");
// const body = document.body;
// const darkMode = localStorage.getItem("dark-mode");

// const enableDarkMode = () => {
// 	toggleBtn.classList.replace("ti-sun", "ti-moon");
// 	body.classList.add("dark");
// 	localStorage.setItem("dark-mode", "enable");
// };

// const disableDarkMode = () => {
// 	toggleBtn.classList.replace("ti-moon", "ti-sun");
// 	body.classList.remove("dark");
// 	localStorage.setItem("dark-mode", "disable");
// };

// if (darkMode === "enable") {
// 	enableDarkMode();
// }

// toggleBtn.onclick = (e) => {
// 	darkMode = localStorage.getItem("dark-mode");
// 	if (darkMode === "disable") {
// 		enableDarkMode();
// 	} else {
// 		disableDarkMode();
// 	}
// };

const playLists = $$(".playlist h4");

playLists.forEach((item) => {
	item.onclick = function () {
		$(".playlist .active").classList.remove("active");
		this.classList.add("active");
	};
});

// const lines = $$(".mid_side .heading .tab_pane-nav");

// lines.forEach((item) => {
// 	item.onclick = function () {
// 		$(".mid_side .heading .active").classList.remove("active");
// 		this.classList.add("active");
// 	};
// });

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");

tabs.forEach((tab, index) => {
	const pane = panes[index];

	tab.onclick = function () {
		$(".tab-item.active").classList.remove("active");
		$(".tab-pane.active").classList.remove("active");

		this.classList.add("active");
		pane.classList.add("active");
	};
});

const tabsLeft = $$(".tab_item-left")
const panesMid = $$(".tab_pane-mid")

tabsLeft.forEach((tabLeft, index) => {
	const paneMid = panesMid[index];

	tabLeft.onclick = function () {
		$(".tab_item-left.active").classList.remove("active");
		$(".tab_pane-mid.active").classList.remove("active");

		this.classList.add("active");
		paneMid.classList.add("active");
	}
})
