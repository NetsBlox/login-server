/* globals NetsBloxApi */
const lookupBtn = document.getElementById("lookup");
const emailField = document.getElementById("email");

lookupBtn.onclick = async () => {
  const email = emailField.value;
  if (!email) {
    M.toast({ html: "Email required." });
    return;
  }

  const api = new NetsBloxApi(config.cloud);
  try {
    await api.forgotUsername(email);
    M.toast({ html: "Email sent!" });
  } catch (err) {
    M.toast({ html: err.message });
  }
};
