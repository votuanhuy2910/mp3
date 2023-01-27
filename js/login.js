const inputEmail = document.getElementById("emailLogin");
const inputPassword = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", (e) => {
	e.preventDefault();

	if (inputEmail.value === "" || inputPassword.value === "") {
		alert("Please do not leave it blank");
	} else {
		const user = JSON.parse(sessionStorage.getItem(inputEmail.value));

		if (
			user.username === inputEmail.value &&
			user.password === inputPassword.value
		) {
			alert("Login successful!");
			window.location.href = "/Layout/home.html";
		} else {
			alert("Login failed!");
		}
	}
});
