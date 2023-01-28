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

let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");

let validation = document.getElementById("validation");

passwordRegister.onclick = () => {
	validation.style.display = "block";
};

passwordRegister.onblur = () => {
	validation.style.display = "none";
};

function checkPassword(data) {
	const lower = new RegExp("(?=.*[a-z])");
	const upper = new RegExp("(?=.*[A-Z])");
	const number = new RegExp("(?=.*[0-9])");
	const special = new RegExp("(?=.*[!@#$%^&*])");
	const length = new RegExp("(?=.{8,})");

	if (lower.test(data)) {
		lowerCase.classList.add("valid");
	} else {
		lowerCase.classList.remove("valid");
	}

	if (upper.test(data)) {
		upperCase.classList.add("valid");
	} else {
		upperCase.classList.remove("valid");
	}

	if (number.test(data)) {
		digit.classList.add("valid");
	} else {
		digit.classList.remove("valid");
	}

	if (special.test(data)) {
		specialChar.classList.add("valid");
	} else {
		specialChar.classList.remove("valid");
	}

	if (length.test(data)) {
		minLength.classList.add("valid");
	} else {
		minLength.classList.remove("valid");
	}
}

const player = document.querySelector(".player");
const musicImg = document.querySelector(".img-area img");
const musicName = document.querySelector(".song-details .name");
const musicArtist = document.querySelector(".song-details .artist");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const mainAudio = document.querySelector("#main-audio");
const progressArea = document.querySelector(".progress-area");
const progressBar = document.querySelector(".progress-bar");
const musicList = document.querySelector(".music-list");
const moreMusicBtn = document.querySelector("#more-music");
const closeMoreMusic = document.querySelector("#close");

moreMusicBtn.addEventListener("click", () => {
	musicList.classList.toggle("show");
});

closeMoreMusic.addEventListener("click", () => {
	moreMusicBtn.click();
});

playPauseBtn.onclick = () => {
	playPauseBtn.classList.toggle("ti-player-pause");
};
