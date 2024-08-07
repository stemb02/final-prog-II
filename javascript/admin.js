document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    if(mail === "admin@gmail.com" && password === "1234") {
        alert("Bienvenido");
        window.location.href = "menuadmin.html";
    }
    else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
})