let getUser = document.getElementById("user");
let formLogin = document.getElementById("login");
let login = document.getElementById("backLoginForm");

let register = document.getElementById("registerForm");
let formRegister = document.getElementById("register");

let closeLogin = document.querySelector(".loginClose");
let closeRegister = document.querySelector(".registerClose");

let togglesCheck = document.querySelectorAll("#checkPass");
let passwordLogin = document.getElementById("passwordLogin");
let passwordRegister = document.getElementById("passwordRegister");

togglesCheck.forEach((toggle) => {
	toggle.onclick = function () {
		if (passwordLogin.type === "password") {
			passwordLogin.setAttribute("type", "text");
			passwordRegister.setAttribute("type", "text");
			this.classList.add("hide");
		} else {
			passwordLogin.setAttribute("type", "password");
			passwordRegister.setAttribute("type", "password");
			this.classList.remove("hide");
		}
	};
});

getUser.onclick = () => {
	formLogin.style.display = "flex";
};

closeLogin.onclick = () => {
	formLogin.style.display = "none";
};

closeRegister.onclick = () => {
	formRegister.style.display = "none";
};

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 27) {
		formLogin.style.display = "none";
		formRegister.style.display = "none";
	}
});

register.onclick = () => {
	formLogin.style.display = "none";
	formRegister.style.display = "flex";
};

login.onclick = () => {
	formRegister.style.display = "none";
	formLogin.style.display = "flex";
};