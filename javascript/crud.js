function validarForm() {
    let camposRequeridos = ['nombre', 'celular', 'nombremascota', 'especie', 'edadanimal', 'turno'];

    let camposVacios = camposRequeridos.filter(campo => !document.getElementById(campo).value.trim());

    if (camposVacios.length > 0) {
        alert('Por favor, complete todos los campos requeridos.');
        return false;
    }

    return true;
}


function ReadData() {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    var html = "";

    listPeople.forEach(function (element, turnos) {
        html += "<tr>";
        html += "<td>"+ element.nombre + "</td>";
        html += "<td>"+ element.celular + "</td>";
        html += "<td>"+ element.nombremascota + "</td>";
        html += "<td>"+ element.especie + "</td>";
        html += "<td>"+ element.edadanimal + "</td>";
        html += "<td>"+ element.turno + "</td>";
        html += '<td><button onclick="deleteData('+ turnos +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="editData('+ turnos +')" class="btn btn-success">Editar Dato</button>';
        html += "</tr>";

    });

    document.querySelector('#tableData tbody').innerHTML= html;
}

document.onload = ReadData();

function AddData() {
    if (validarForm() == true) {
        let nombre = document.getElementById('nombre').value;
        let celular = document.getElementById('celular').value;
        let nombremascota = document.getElementById('nombremascota').value;
        let especie = document.getElementById('especie').value;
        let edadanimal = document.getElementById('edadanimal').value;
        let turno = document.getElementById('turno').value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople =[];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            nombre:  nombre,
            celular: celular,
            nombremascota: nombremascota,
            especie: especie,
            edadanimal: edadanimal,
            turno: turno,
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('nombre').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('nombremascota').value = '';
        document.getElementById('especie').value = '';
        document.getElementById('edadanimal').value = '';
        document.getElementById('turno').value = '';
    }
}

function deleteData(turnos) {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.splice(turnos, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();
}

function editData(turnos) {
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('nombre').value = listPeople[turnos].nombre;
    document.getElementById('celular').value = listPeople[turnos].celular;
    document.getElementById('nombremascota').value = listPeople[turnos].nombremascota;
    document.getElementById('especie').value = listPeople[turnos].especie;
    document.getElementById('edadanimal').value = listPeople[turnos].edadanimal;
    document.getElementById('turno').value = listPeople[turnos].turno;

    document.getElementById('BtnAdd').style.display = 'none';
    document.getElementById('BtnUpDate').style.display = 'block';

    document.getElementById('BtnUpDate').onclick = function () {
        if (validarForm() == true) {
            listPeople[turnos].nombre = document.getElementById('nombre').value;
            listPeople[turnos].celular = document.getElementById('celular').value;
            listPeople[turnos].nombremascota = document.getElementById('nombremascota').value;
            listPeople[turnos].especie = document.getElementById('especie').value;
            listPeople[turnos].edadanimal = document.getElementById('edadanimal').value;
            listPeople[turnos].turno = document.getElementById('turno').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();

            // Resetear campos del formulario
            document.getElementById('nombre').value = '';
            document.getElementById('celular').value = '';
            document.getElementById('nombremascota').value = '';
            document.getElementById('especie').value = '';
            document.getElementById('edadanimal').value = '';
            document.getElementById('turno').value = '';

            document.getElementById('BtnAdd').style.display = 'block';
            document.getElementById('BtnUpDate').style.display = 'none';
        }
    };
}
