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
		alert("Invalid Email Address");
	} else if (!checkPass) {
		alert("Invalid Password");
	} else {
		const user = {
			username: inputEmail.value,
			password: inputPassword.value,
		};

		let json = JSON.stringify(user);
		localStorage.setItem(inputEmail.value, json);
		alert("Login successful!");
		window.location.href = "/home.html";
	}
});
