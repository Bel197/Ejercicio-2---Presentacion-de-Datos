var datos = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

var ficha = "";
 datos.forEach(function(item,i) {
  ficha += '<div>' +
  '<ul><li>Nombre:' + item.nombre +
  '</li><li>Apellido:' + item.apellido +
  '</li><li>Rol:' + item.rol +
  '</li><li>Cumpleaños:' + item.cumpleanios +'</li></ul></div>';
})

 document.getElementById("imprimir").innerHTML = ficha;
