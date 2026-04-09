$(document).ready(function () {
  $("#btn-mostrar-inputs-tarea").click(function(){
    //acción esconder
    if ($("#menu-tareas-escondible").is(":visible")) {
      $("#menu-tareas-escondible").hide();
      $("#btn-agregar-tarea").hide();
      $("#botones-menu").css({ "margin-top": 0 });
      $("#btn-mostrar-inputs-tarea").text("Añadir tarea");

      $("#input-titulo-tarea").val("");
      $("#input-cuerpo-tarea").val("");

    //acción enseñar
    } else {
      $("#menu-tareas-escondible").show();
      $("#btn-agregar-tarea").show();
      $("#botones-menu").css({ "margin-top": "5%" });
      $("#btn-mostrar-inputs-tarea").text("Cancelar");
    }
  });

  $("#btn-agregar-tarea").click(function(){
    let tarea = $("<div>").addClass("tarea");

    let titulo = $("<p>").addClass("tarea-titulo");
    if($("#input-titulo-tarea").val() == ""){
      titulo.text("Tarea sin título");
    } else {
      titulo.text($("#input-titulo-tarea").val());
    }
    
    let cuerpo = $("<p>").addClass("tarea-cuerpo");
    if($("#input-cuerpo-tarea").val() == ""){
      cuerpo.text("No hay descripción");
    } else {
      cuerpo.text($("#input-cuerpo-tarea").val());
    }

    $(tarea).append(titulo);
    $(tarea).append(cuerpo);
    $(tarea).append($("<button>").addClass("btn-completar-tarea").text("Marcar como completada"));
    $(tarea).append($("<button>").addClass("btn-eliminar-tarea").text("Eliminar tarea"));
    
    $("#lista-tareas").prepend(tarea);

    $("#input-titulo-tarea").val("");
    $("#input-cuerpo-tarea").val("");
  });

  $("#lista-tareas").on("mouseenter", ".tarea", function(){
    $(this).children().show();
  });

  $("#lista-tareas").on("mouseleave", ".tarea", function(){
    $(this).find(".tarea-cuerpo").hide();
    $(this).find(".btn-completar-tarea").hide();
    $(this).find(".btn-eliminar-tarea").hide();
  });

  $("#lista-tareas").on("click", ".btn-completar-tarea", function(){
    $(this).siblings(".tarea-titulo").css("background-color", "rgb(117, 226, 122)");
    $(this).siblings(".tarea-cuerpo").css("background-color", "rgb(179, 255, 175)");
  });

  $("#lista-tareas").on("click", ".btn-eliminar-tarea", function(){
    $(this).parent().remove();
  })
});
