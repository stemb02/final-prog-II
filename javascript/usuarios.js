let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUserTable() {
    const userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = "";
    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.username}</td>
                <td>${user.mail}</td>
                <td>
                    <button onclick="openEditModal(${index})">Editar</button>
                    <button onclick="deleteUser(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        userTableBody.innerHTML += row;
    });
}

function openAddModal() {
    document.getElementById("modalTitle").textContent = "Agregar Usuario";
    document.getElementById("addEditForm").reset();
    document.getElementById("addEditForm").onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById("addEditUsername").value;
        const mail = document.getElementById("addEditEmail").value;
        const password = document.getElementById("addEditPassword").value;
        users.push({ username, mail, password });
        localStorage.setItem("users", JSON.stringify(users));
        renderUserTable();
        closeAddEditModal();
    };
    document.getElementById("addEditModal").style.display = "block";
}

function openEditModal(index) {
    document.getElementById("modalTitle").textContent = "Editar Usuario";
    const user = users[index];
    document.getElementById("addEditUsername").value = user.username;
    document.getElementById("addEditEmail").value = user.mail;
    document.getElementById("addEditPassword").value = user.password;
    document.getElementById("addEditForm").onsubmit = function(e) {
        e.preventDefault();
        const newUsername = document.getElementById("addEditUsername").value;
        const newMail = document.getElementById("addEditEmail").value;
        const newPassword = document.getElementById("addEditPassword").value;
        users[index] = { username: newUsername, mail: newMail, password: newPassword };
        localStorage.setItem("users", JSON.stringify(users));
        renderUserTable();
        closeAddEditModal();
    };
    document.getElementById("addEditModal").style.display = "block";
}


function closeAddEditModal() {
    document.getElementById("addEditModal").style.display = "none";
}

function deleteUser(index) {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUserTable();
    }
}

renderUserTable();



