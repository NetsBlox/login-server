// Set up the login button
const loginBtn = document.getElementById("login");
const registerLink = document.getElementById("register");
const passwordField = document.getElementById("password");
const usernameField = document.getElementById("username");

loginBtn.onclick = async function () {
  // Get the username and password
  const username = usernameField.value;
  const password = passwordField.value;

  // Check if "remember me" is checked
  //const remember = document.getElementById('remember').checked;

  // Login!
  const api = new NetsBloxApi(config.cloud);
  try {
    await api.login({ credentials: { NetsBlox: { username, password } } });
    // If login successful, redirect to the next url
    window.location = config.redirect;
  } catch (err) {
    M.toast({ html: `Login Failed: ${err.message}` });
  }
};

const queries = document.location.href.replace(/[^?]+/, "");
registerLink.href = "/register.html" + queries;

usernameField.onkeyup = (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    passwordField.focus();
  }
};

passwordField.onkeyup = (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    loginBtn.click();
  }
};
