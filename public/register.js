// Set up the links
const privacyLink = document.getElementById("privacyLink");
const tosLink = document.getElementById("tosLink");

privacyLink.setAttribute("href", `${config.editor}/privacy.html`);
tosLink.setAttribute("href", `${config.editor}/tos.html`);
privacyLink.setAttribute("target", "_blank");
tosLink.setAttribute("target", "_blank");

const registerBtn = document.getElementById("register");
registerBtn.onclick = async () => {
  // Get the username
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate the password
  const confirmed = document.getElementById("confirm").value;
  if (confirmed === password) {
    const agreeToTos = document.getElementById("tos").checked;
    if (agreeToTos) {
      try {
        // Register!
        const cloud = new Cloud(config.cloud);
        await cloud.register(username, email, password);
        cloud.login(username, password);
        window.location = config.redirect;
      } catch (err) {
        M.toast({ html: err.message });
      }
    } else {
      M.toast({ html: "Please agree to the Terms of Service" });
    }
  } else {
    M.toast({ html: "Passwords do not match" });
  }
};
