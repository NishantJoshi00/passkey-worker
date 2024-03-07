
// if user is passed in query parameter then hide id="username"
const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");
if (user) {
  document.getElementById("username").value = user;
  document.getElementById("username").hidden = true;
}


function showMessage(message, isError = false) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = isError ? "red" : "green";
}

document.getElementById("LockBtn").addEventListener("click", function () {
  fetch("/api/protected/lock", {
    method: "POST",
  })
    .then((response) => {
      if (response.ok) {
        return showMessage("Locked");
      }

      if (response.status === 401) {
        return login();
      }
    })
    .catch((err) => {
      console.log(err);
      showMessage("Failed While Locking", true);
    });
});

document.getElementById("RestartBtn").addEventListener("click", function () {
  fetch("/api/protected/restart", {
    method: "POST",
  })
    .then((response) => {
      // check if response is ok
      if (response.ok) {
        return showMessage("Restarted");
      }

      if (response.status === 401) {
        return login();
      }
    })
    .catch((err) => {
      console.log(err);
      showMessage("Failed While Restarting", true);
    });
});
