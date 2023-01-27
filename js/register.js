const inputEmailRegister = document.getElementById("emailRegister");
const inputPassRegister = document.getElementById("passwordRegister");
// const inputConfirmPassRegister = document.getElementById("confirmPassword");
const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", (e) => {
	e.preventDefault();

	if (inputEmailRegister.value === "" || inputPassRegister.value === "") {
		alert("Please fill in the form...");
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
