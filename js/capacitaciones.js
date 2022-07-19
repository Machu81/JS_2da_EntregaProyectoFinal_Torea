class Capacitacion {
    constructor(id, tipo, nombre, duracion, precio, foto) {
        this.id = id;
        this.tipo = tipo;
        this.nombre  = nombre.toUpperCase();
        this.duracion = duracion;
        this.precio = precio;
        this.foto = foto;
    }
    masIva(){
        this.precio = this.precio * 1.21;
    }
}

const capacitaciones = [];

capacitaciones.push(new Capacitacion(01, "Programa", "Asesor Financiero Certificado", 48, 54000, "./img/asesorFinanciero2.jpg"));
capacitaciones.push(new Capacitacion(02, "Programa", "Tu Nuevo Rol", 56, 60000, "./img/TNR.jpg"));
capacitaciones.push(new Capacitacion(03, "Programa", "Generación X", 46, 45000, "./img/GX1.jpg"));
capacitaciones.push(new Capacitacion(04, "Curso", "Asociatividad", 30, 30000, "./img/asociatividad.jpg"));
capacitaciones.push(new Capacitacion(05, "Curso", "Tiempo de Balances", 36, 35000, "./img/TB.jpg"));
capacitaciones.push(new Capacitacion(06, "Curso", "Proyección Profesional", 40, 1500, "./img/proyeccionP.jpg"));
capacitaciones.push(new Capacitacion(07, "Workshop", "Mujeres de vuelta a la profesión", 8, 15000, "./img/mujeres.jpg"));
capacitaciones.push(new Capacitacion(08, "Workshop", "Mi Primer Estudio", 8, 16000, "./img/MPE.jpg"));

for (const capacitacion of capacitaciones) {
capacitacion.masIva();
}

console.log(capacitaciones.length);