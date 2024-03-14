const tablaTareas = document.getElementById("tablaTareas");

/**
 * Agrega una fila a la tabla de tareas con la información de una tarea y fecha.
 * @param {string} tarea - La tarea ingresada.
 * @param {string} fecha - La fecha ingresada.
 */
function agregarFilaTarea(tarea, fecha, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${tarea}</td>
    <td>${fecha}</td>
  `;
  tabla.appendChild(fila);
}

/**
 * Obtiene los valores de entrada ingresados por el usuario.
 * @returns {Object} - Un objeto con los valores de entrada ingresados por el usuario.
 */
function obtenerValoresEntrada() {
  const tarea = document.getElementById("tarea").value.trim();
  const fecha = document.getElementById("fecha").value;

  if (tarea.length === 0 || fecha.length === 0) {
    alert("Por favor, ingrese valores en todos los campos.");
    return null;
  }

  return { tarea, fecha };
}

function crearTabla(valoresEntrada) {
  const { tarea, fecha } = valoresEntrada;
  agregarFilaTarea("tarea", tarea, tablaTareas);
}

/*Boton agregar*/
const agregarTareaBtn = document.getElementById("agregarTarea-btn");
agregarTareaBtn.addEventListener("click", () => {
  agregarFilaTarea();

  const valoresEntrada = obtenerValoresEntrada();

  if (valoresEntrada === null) {
    return;
  }
});

/*Boton para visualizar las tareas*/
const verTareaBtn = document.getElementById("verTarea-btn");
verTareaBtn.addEventListener("click", () => {
  tablaTareas.style.display = "block";
  tarea.style.display = "none";
  fecha.style.display = "none";
  agregarTareaBtn.style.display = "none";
  verTareaBtn.style.display = "none";
  volverBtn.style.display = "block";
});

/* boton para volver */
const volverBtn = document.getElementById("volver-btn");
volverBtn.addEventListener("click", () => {
  tablaTareas.style.display = "none";
  agregarTareaBtn.style.display = "inline-block";
  verTareaBtn.style.display = "inline-block";
  volverBtn.style.display = "none";
  fecha.style.display = "block";
  tarea.style.display = "block";
});
