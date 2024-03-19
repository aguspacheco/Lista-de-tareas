const tareaInput = document.getElementById("tarea");
const fechaInput = document.getElementById("fecha");
const agregarTareaBtn = document.getElementById("agregarTarea-btn");
const verTareaBtn = document.getElementById("verTarea-btn");
const volverBtn = document.getElementById("volver-btn");
const tablaBody = document.createElement("tbody");
const tablaTareas = document.getElementById("tablaTareas");

let tareas = [];

function agregarTarea() {
  const tarea = tareaInput.value.trim();
  const fecha = fechaInput.value.trim();

  if (tarea && fecha) {
    if (tareas.length < 10) {
      tareas.push({ tarea, fecha });
      tareaInput.value = "";
      fechaInput.value = "";
      actualizarTabla();
    } else {
      alert("Se alcanzo el máximo de tareas");
    }
  } else {
    alert("Por favor, ingresa una tarea y una fecha");
  }
}

function actualizarTabla() {
  tablaBody.innerHTML = "";

  if (tareas.length === 0) {
    const filaSinTareas = document.createElement("tr");
    const celdaSinTareas = document.createElement("td");
    celdaSinTareas.colSpan = 2;
    celdaSinTareas.textContent = "No se ingreso ninguna tarea";
    filaSinTareas.appendChild(celdaSinTareas);
    tablaBody.appendChild(filaSinTareas);
  } else {
    tareas.forEach((tarea, index) => {
      const fila = document.createElement("tr");
      const celdaTarea = document.createElement("td");
      const celdaFecha = document.createElement("td");

      celdaTarea.textContent = tarea.tarea;
      celdaFecha.textContent = tarea.fecha;

      fila.appendChild(celdaTarea);
      fila.appendChild(celdaFecha);
      tablaBody.appendChild(fila);
    });
  }

  tablaTareas.appendChild(tablaBody);
}

function mostrarTabla() {
  tablaTareas.style.display = tablaTareas.style.display === "none" ? "table" : "none";
  volverBtn.style.display = tablaTareas.style.display === "none" ? "table" : "inline-block";
}

agregarTareaBtn.addEventListener("click", agregarTarea);
verTareaBtn.addEventListener("click", mostrarTabla);
volverBtn.addEventListener("click", mostrarTabla);
