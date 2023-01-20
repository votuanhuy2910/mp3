let getUser = document.getElementById("user");
let formLogin = document.getElementById("login");
let close = document.querySelector(".loginClose");

getUser.onclick = () => {
	formLogin.style.display = "flex";
};

close.onclick = () => {
	formLogin.style.display = "none";
};

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 27) {
		formLogin.style.display = "none";
	}
});

let label = document.querySelector(".field_label");
let holder = document.querySelector(".field_placeholder");
let input = document.querySelector(".field_input");



