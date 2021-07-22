function saveUsers() {
  document.getElementById("first").style.display = "block";
  document.getElementById("last").style.display = "block";
  document.getElementById("save-btn").style.display = "block";
  document.getElementById("save-btn").onclick = function () {
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    document.getElementById("show-name").innerHTML =
      "Greetings," +
      " " +
      firstName.toUpperCase() +
      " " +
      lastName.toUpperCase();
  };
}
export { saveUsers };
