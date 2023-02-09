const inputEmail = document.getElementById("emailLogin");
const inputPassword = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");

btnLogin.disabled = true;

inputEmail.addEventListener("keyup", btnState);
inputPassword.addEventListener("keyup", btnState);

function handleShowAndHideToast(type) {
	const toast = document.createElement("div");
	toast.classList.add("toast", type);

	if (type === "success") {
		toast.innerHTML = `
			<i class="fa-solid fa-circle-check"></i>
			<p>Login successfully</p>
			<span>Welcome to my MP3 website</span>
			<a href="/home.html">OK</a>
			<div class="cout_down"></div>
		`;
	}

	if (type === "error") {
		toast.innerHTML = `
			<i class="fa-solid fa-circle-error"></i>
			<p>Login successfully</p>
			<span>Welcome to my MP3 website</span>
			<a href="/home.html">OK</a>
			<div class="cout_down"></div>
		`;
	}

	const login = document.getElementById("login");
	login.style.display = "none";

	const toastList = document.querySelector("#toast");
	toastList.appendChild(toast);

	// setTimeout(() => {
	// 	toast.style.animation = `hideToast ease 3s forwards`;
	// }, 3000);

	// setTimeout(() => {
	// 	toast.remove();
	// }, 3000 + 3000);
}

function btnState() {
	if (inputEmail.value === "" && inputPassword.value === "") {
		btnLogin.disabled = true;
	} else {
		btnLogin.disabled = false;
	}
}

btnLogin.addEventListener("click", (e) => {
	e.preventDefault();

	let regexMail =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
	let regexPassword =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,16}$/gm;

	let checkEmail = regexMail.test(inputEmail.value);
	let checkPass = regexPassword.test(inputPassword.value);

	if (inputEmail.value === "" && inputPassword.value === "") {
		alert("Please fill in the form...");
	} else if (!checkEmail) {
		alert("Please fill in the form...");
	} else if (!checkPass) {
		alert("Please fill in the form...");
	} else {
		const user = {
			username: inputEmail.value,
			password: inputPassword.value,
		};

		let json = JSON.stringify(user);
		localStorage.setItem(inputEmail.value, json);
		handleShowAndHideToast("success");
		// setTimeout(() => {
		// 	window.location.href = "/home.html";
		// }, 3000);
	}
});
