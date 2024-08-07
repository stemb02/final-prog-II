document.getElementById("registroform").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.mail === mail);
    if (userExists) {
        return alert("Usuario ya registrado");
    }

    users.push({ username, mail, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso");
});

const password = document.getElementById("password");
const checkbox = document.getElementById("visible");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
});