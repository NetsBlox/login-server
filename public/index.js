// Set up the login button
const loginBtn = document.getElementById('login');
const registerLink = document.getElementById('register');
const passwordField = document.getElementById('password');
const usernameField = document.getElementById('username');

loginBtn.onclick = function() {
  // Get the username and password
  const username = usernameField.value;
  const password = passwordField.value;

  // Check if "remember me" is checked
  //const remember = document.getElementById('remember').checked;

  // Login!
  const redirectUrl = getQueryStringValue('redirect') || SERVER_URL;
  const auth = new AuthHandler(SERVER_URL);
  auth.login(username, password)
    // If login successful, redirect to the next url
    .then(request => window.location = redirectUrl)
    .catch(err => M.toast({html: `Login Failed: ${err.request.responseText}`}));
};

const queries = document.location.href.replace(/[^?]+/, '');
registerLink.href = '/register.html' + queries;

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
