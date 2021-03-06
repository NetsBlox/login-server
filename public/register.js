// Set up the links
const privacyLink = document.getElementById('privacyLink');
const tosLink = document.getElementById('tosLink');

privacyLink.setAttribute('href', `${SERVER_URL}/privacy.html`);
tosLink.setAttribute('href', `${SERVER_URL}/tos.html`);
privacyLink.setAttribute('target', '_blank');
tosLink.setAttribute('target', '_blank');

const registerBtn = document.getElementById('register');
registerBtn.onclick = () => {
    // Get the username
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the password
    const confirmed = document.getElementById('confirm').value;
    if (confirmed === password) {
        const agreeToTos = document.getElementById('tos').checked;
        if (agreeToTos) {
            // Register!
            const redirectUrl = getQueryStringValue('redirect') || SERVER_URL;
            const auth = new AuthHandler(SERVER_URL);
            auth.register(username, email, password)
                .then(request => auth.login(username, password))
                .then(request => window.location = redirectUrl)
                .catch(err => M.toast({html: err.request.responseText}));
        } else {
            M.toast({html: 'Please agree to the Terms of Service'});
        }
    } else {
        M.toast({html: 'Passwords do not match'});
    }
};

