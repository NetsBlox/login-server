/* globals NetsBloxApi */
const resetBtn = document.getElementById("reset");
const usernameField = document.getElementById("username");
const helperField = document.getElementById("helper");

resetBtn.onclick = async () => {
  const username = usernameField.value;
  if (!username) {
    M.toast({ html: "Username required." });
    return;
  }

  const api = new NetsBloxApi(config.cloud);
  try {
    await api.resetPassword(username);
    M.toast({ html: "Reset link sent via email!" });
  } catch (err) {
    M.toast({ html: err.message });
  }
};
