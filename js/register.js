const inputEmailRegister = document.getElementById("emailRegister");
const inputPassRegister = document.getElementById("passwordRegister");
// const inputConfirmPassRegister = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");

btnRegister.disabled = true;

inputEmailRegister.addEventListener("keyup", btnState);
inputPassRegister.addEventListener("keyup", btnState);

function btnState() {
	if (inputEmailRegister.value === "" && inputPassRegister.value === "") {
		btnRegister.disabled = true;
	} else {
		btnRegister.disabled = false;
	}
}

btnRegister.addEventListener("click", (e) => {
	e.preventDefault();

	let regexMail =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
	let regexPassword =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,16}$/gm;

	let checkEmail = regexMail.test(inputEmailRegister.value);
	let checkPass = regexPassword.test(inputPassRegister.value);

	if (inputEmailRegister.value === "" && inputPassRegister.value === "") {
		alert("Please fill in the form...");
	} else if (!checkEmail) {
		alert("Invalid Email Address");
	} else if (!checkPass) {
		alert("Invalid Password");
	} else {
		const user = {
			username: inputEmailRegister.value,
			password: inputPassRegister.value,
			// confirmPassword: inputConfirmPassRegister.value
		};

		let json = JSON.stringify(user);
		localStorage.setItem(inputEmailRegister.value, json);
		alert("Successfully");
		window.location.reload();
	}
});

let validation = document.getElementById("validation");

passwordRegister.onclick = () => {
	validation.style.display = "block";
};

passwordRegister.onblur = () => {
	validation.style.display = "none";
};

function checkPassword(data) {
	let lowerCase = document.getElementById("lower");
	let upperCase = document.getElementById("upper");
	let digit = document.getElementById("number");
	let specialChar = document.getElementById("special");
	let minLength = document.getElementById("length");

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
