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

let leftSide = $(".left_side");
let rightSide = $(".right_side");
let activeBtnPlaylist = document.getElementById("playlist");
let activeBtnLeftSide = $(".btn-z");
let activeBtnLeftSide1 = $(".btn-z_right");

activeBtnLeftSide.addEventListener("click", () => {
	leftSide.classList.toggle("active");
});

activeBtnLeftSide1.addEventListener("click", () => {
	leftSide.classList.toggle("active");
});

activeBtnPlaylist.addEventListener("click", () => {
	rightSide.classList.toggle("active");
});

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

const slidersDiscover = $$(".overview__slider-item");

var sliderIndex1 = 1;

changeImage1Replate = function () {
	slidersDiscover.forEach((item, index) => {
		if (index == sliderIndex1) {
			slidersDiscover[index].classList.replace(
				"second",
				"first"
			);
			slidersDiscover[index].classList.replace(
				"third",
				"first"
			);
			slidersDiscover[index].classList.replace(
				"four",
				"first"
			);
		} else if (index == sliderIndex1 + 1) {
			slidersDiscover[index].classList.replace(
				"first",
				"second"
			);
			slidersDiscover[index].classList.replace(
				"third",
				"second"
			);
			slidersDiscover[index].classList.replace(
				"four",
				"second"
			);
		} else if (index == sliderIndex1 + 2) {
			slidersDiscover[index].classList.replace(
				"first",
				"third"
			);
			slidersDiscover[index].classList.replace(
				"second",
				"third"
			);
			slidersDiscover[index].classList.replace(
				"four",
				"third"
			);
		} else {
			slidersDiscover[index].classList.replace(
				"first",
				"four"
			);
			slidersDiscover[index].classList.replace(
				"second",
				"four"
			);
			slidersDiscover[index].classList.replace(
				"third",
				"four"
			);
		}
		if (sliderIndex1 == 2) {
			slidersDiscover[0].classList.replace(
				"first",
				"third"
			);
			slidersDiscover[0].classList.replace(
				"second",
				"third"
			);
			slidersDiscover[0].classList.replace(
				"four",
				"third"
			);
		} else if (sliderIndex1 == 3) {
			slidersDiscover[0].classList.replace(
				"first",
				"second"
			);
			slidersDiscover[0].classList.replace(
				"third",
				"second"
			);
			slidersDiscover[0].classList.replace(
				"four",
				"second"
			);
			slidersDiscover[1].classList.replace(
				"first",
				"third"
			);
			slidersDiscover[1].classList.replace(
				"second",
				"third"
			);
			slidersDiscover[1].classList.replace(
				"four",
				"third"
			);
		}
	});
};

changeImage1 = function () {
	changeImage1Replate();
	sliderIndex1++;
	if (sliderIndex1 >= 4) {
		sliderIndex1 = 0;
	}
};

setInterval(changeImage1, 5000);


$(".overview__slider-right").onclick = function () {
	changeImage1();
}

$(".overview__slider-left").onclick = function () {
	changeImage1Replate();
	sliderIndex1--;
	if (sliderIndex1 < 0) {
		sliderIndex1 = 3;
	}
}