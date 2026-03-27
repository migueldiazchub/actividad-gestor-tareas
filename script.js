$(document).ready(function () {
  $("#btn-mostrar-inputs-tarea").click(() => {
    if ($("#menu-tareas-escondible").is(":visible")) {
      $("#menu-tareas-escondible").hide();
      $("#btn-agregar-tarea").hide();
      $("#botones-menu").css({ "margin-top": 0 });
      $(this).text("Añadir tarea");
    } else {
      $("#menu-tareas-escondible").show();
      $("#btn-agregar-tarea").show();
      $("#botones-menu").css({ "margin-top": "5%" });
      $(this).text("Cancelar");
    }
  });

  $("#btn-agregar-tarea").click(() => {
    const nuevoTitulo = $("#input-titulo-tarea").val();
    const nuevoCuerpo = $("#input-cuerpo-tarea").val();
    listaTareas.push(new Tarea(nuevoTitulo, nuevoCuerpo));
  });

  class Tarea {
    tarea(titulo, cuerpo) {
      this.titulo = titulo;
      this.cuerpo = cuerpo;
    }
  }

  const listaTareas = [];
});
