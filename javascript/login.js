document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.mail === mail && user.password === password);
    if (!user) {
        return alert("Usuario y/o contraseña incorrectos");
    }

    if (user.isAdmin) {
        alert("Inicio de sesión como administrador exitoso");
        window.location.href = "menuadmin.html";
    } else {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    }
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


const adminUser = {
    mail: "admin@gmail.com",
    password: "123",
    isAdmin: true
};
let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(adminUser);
localStorage.setItem("users", JSON.stringify(users));