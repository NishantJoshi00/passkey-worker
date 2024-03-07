import subprocess from "node:child_process";

function runLock() {
  subprocess.exec("hyprlock", (error, stdout, stderr) => {});
}


export { runLock };
