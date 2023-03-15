const inputEmail = document.getElementById("emailLogin");
const inputPassword = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");

btnLogin.disabled = true;

inputEmail.addEventListener("keyup", btnState);
inputPassword.addEventListener("keyup", btnState);

function btnState() {
	if (inputEmail.value === "" && inputPassword.value === "") {
		btnLogin.disabled = true;
	} else {
		btnLogin.disabled = false;
	}
}

const toastDetails = {
	success: {
		icon: "fa-circle-check",
		message: "Successfully",
	},
	invalid_username: {
		icon: "fa-user",
		message: "Warning: Invalid username",
	},
	invalid_password: {
		icon: "fa-key",
		message: "Warning: Invalid password",
	},
	fill_form: {
		icon: "fa-circle-exclamation",
		message: "Warning: Please fill out the form",
	},
	fill_username: {
		icon: "fa-circle-exclamation",
		message: "Warning: Please email...",
	},
	fill_password: {
		icon: "fa-circle-exclamation",
		message: "Warning: Please password...",
	},
	error_username: {
		icon: "fa-triangle-exclamation",
		message: "Error: Please enter email again...",
	},
	error_password: {
		icon: "fa-triangle-exclamation",
		message: "Error: Please enter password again...",
	},
	error_username_password: {
		icon: "fa-triangle-exclamation",
		message: "Error: Please re-enter email & password",
	},
};

const removeToast = (toast) => {
	toast.classList.add("remove");
	setTimeout(() => toast.remove(), 3000 + 3000);
};

function handleShowAndHideToastSuccess(type) {
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

	const login = document.getElementById("login");
	login.style.display = "none";

	const toastListSuccess = document.querySelector("#toast_success");
	toastListSuccess.appendChild(toast);
}

function handleShowAndHideToastError(type) {
	const { icon, message } = toastDetails[type];
	const toast = document.createElement("div");
	toast.classList.add("toast", type);

	if (type === "invalid_username") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down invalid"></div>
		`;
	}

	if (type === "invalid_password") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down invalid"></div>
		`;
	}

	if (type === "fill_form") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down info"></div>
		`;
	}

	if (type === "fill_username") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down info"></div>
		`;
	}

	if (type === "fill_password") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down info"></div>
		`;
	}

	if (type === "error_username") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down"></div>
		`;
	}

	if (type === "error_password") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down"></div>
		`;
	}

	if (type === "error_username_password") {
		toast.innerHTML = `
			<i class="fa-solid ${icon}"></i>
			<p>${message}</p>
			<i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>
			<div class="cout_down"></div>
		`;
	}

	const toastListError = document.querySelector("#toast_error");
	toastListError.appendChild(toast);

	setTimeout(() => removeToast(toast), 3000);

	// setTimeout(() => {
	// 	toast.style.animation = `hideToastError ease 3s forwards`;
	// }, 3000);

	// setTimeout(() => {
	// 	toast.remove();
	// }, 3000 + 3000);
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
		handleShowAndHideToastError("fill_form");
	} else if (inputEmail.value === "") {
		handleShowAndHideToastError("fill_username");
	} else if (inputPassword.value === "") {
		handleShowAndHideToastError("fill_password");
	} else if (!checkEmail) {
		handleShowAndHideToastError("invalid_username");
	} else if (!checkPass) {
		handleShowAndHideToastError("invalid_password");
	} else {
		const user = JSON.parse(localStorage.getItem(""));

		if (
			user.username === inputEmail.value &&
			user.password === inputPassword.value
		) {
			handleShowAndHideToastSuccess("success");
			setTimeout(() => {
				window.location.href = "/home.html";
			}, 3000);
		} else if (
			user.username !== inputEmail.value &&
			user.password === inputPassword.value
		) {
			handleShowAndHideToastError("error_username");
		} else if (
			user.username === inputEmail.value &&
			user.password !== inputPassword.value
		) {
			handleShowAndHideToastError("error_password");
		} else {
			handleShowAndHideToastError("error_username_password");
		}
	}
});
