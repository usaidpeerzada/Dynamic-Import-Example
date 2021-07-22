function UserAuthentication() {
  document.getElementById("password-btn").onclick = function () {
    let isPassword;
    let inputPassword = document.getElementById("password").value;
    inputPassword === "doit" ? (isPassword = true) : (isPassword = false);
    if (isPassword) {
      document.getElementById("password").style.display = "none";
      document.getElementById("password-btn").style.display = "none";
      import("./SaveUsers.js").then(({ saveUsers }) => {
        saveUsers();
      });
    } else {
      document.getElementById("show-name").innerHTML =
        "Wrong Password, You are not authenticated.";
    }
    console.log(isPassword);
  };
}

export { UserAuthentication };
