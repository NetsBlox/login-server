// Set up the login button
const loginBtn = document.getElementById('login');
const passwordField = document.getElementById('password');
const usernameField = document.getElementById('username');

loginBtn.onclick = function() {
    // Get the username and password
    const username = usernameField.value;
    const password = passwordField.value;

    // Check if "remember me" is checked
    //const remember = document.getElementById('remember').checked;

    // Login!
    const loginUrl = getQueryStringValue('url') || SERVER_URL;
	const redirectUrl = getQueryStringValue('redirect') || loginUrl;
	const auth = new AuthHandler(loginUrl);
	auth.login(username, password)
		// If login successful, redirect to the next url
		.then(request => window.location = redirectUrl)
		.catch(err => M.toast({html: `Login Failed: ${err.request.responseText}`}));
};

usernameField.onkeyup = event => {
	event.preventDefault();
	if (event.keyCode === 13) {
		passwordField.focus();
	}
};

passwordField.onkeyup = event => {
	event.preventDefault();
	if (event.keyCode === 13) {
		loginBtn.click();
	}
};

function getQueryStringValue(name) {
	const pair = window.location.search.slice(1).split('&')
		.map(pair => {
			const keyVal = pair.split('=');
			keyVal[1] = decodeURIComponent(keyVal[1]);
			return keyVal;
		})
		.find(pair => pair[0] === name);

    return pair && pair.pop();
}
