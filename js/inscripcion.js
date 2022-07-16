let inscripcion = cargarCarrito();
let sectionCapacitaciones = document.getElementById("section-capacitaciones");
let sectionInscripcion = document.getElementById("section-inscripcion");
let montoTotalInscripcion = document.getElementById("montoTotalInscripcion");
let cantCapacitaciones = document.getElementById("cantCapacitaciones");
let botonFinalizar = document.getElementById("botonFinalizar");

botonFinalizar.onclick = () => {
  const precioFinal = montoTotalInscripcion.innerText;
  
  Swal.fire({
    title: '¿Seguro que querés finalizar la inscripción?',
    text: `Total a pagar: $${precioFinal}`,
    showCancelButton: true,
    confirmButtonColor: '#4c9e9e',
    cancelButtonColor: '#4f7070',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Felicidades! Tu inscripción está confirmada',
        '¡Bienvenida/o a Programas Profesionales!',
        'success'
      )
      vaciarCarrito();
    }
  })
}

for (const capacitacion of capacitaciones) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-capacitacion");
    container.innerHTML = ` <div class="img-container">
                              <img src="${capacitacion.foto}" alt="${capacitacion.nombre}" class="img-capacitacion"/>
                              </div>
                              <div class="info-capacitacion">
                              <p class="font">${capacitacion.nombre}</p>
                              <strong class="font">$${capacitacion.precio}</strong>
                              <button class="boton" id="btn${capacitacion.id}"> Inscribite </button>
                              </div>`;
    sectionCapacitaciones.appendChild(container);
    document.getElementById(`btn${capacitacion.id}`).onclick = () => agregarInscripcion(`${capacitacion.id}`);
  }
  
function agregarInscripcion(id) {
  inscripcion.push(capacitaciones.find(p => p.id == id));
  localStorage.setItem("inscripcion", JSON.stringify(inscripcion));
  calcularTotalInscripcion();
}

function calcularTotalInscripcion() {
  let total = 0;
  for (const capacitacion of inscripcion) {
    total += capacitacion.precio;
  }
  montoTotalInscripcion.innerText = total;
  cantCapacitaciones.innerText = inscripcion.length;
}

function vaciarCarrito() {
    montoTotalInscripcion.innerText = "0";
    cantCapacitaciones.innerText = "0";
    localStorage.clear();
    inscripcion = [];
  }

function cargarCarrito() {
    let inscripcion = JSON.parse(localStorage.getItem("inscripcion"));
    if (inscripcion == null) {
      return [];
    } else {
      return inscripcion;
    }
  }