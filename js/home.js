let playLists = document.querySelectorAll(".playlist h4");

playLists.forEach((item) => {
	item.onclick = function () {
		document.querySelector(".playlist .active").classList.remove("active");
		this.classList.add("active");
	};
});
