document.getElementById("loginButton").addEventListener("click", login);

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
        showMessage("Locked");
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
        showMessage("Restarted");
      }
    })
    .catch((err) => {
      console.log(err);
      showMessage("Failed While Restarting", true);
    });
});
