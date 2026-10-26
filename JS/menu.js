(function () 
{

  var boton = document.getElementById("menuToggle");

  var menu = document.getElementById("menu");

  if (!boton || !menu) return;

  function cerrar() 
  {

    menu.classList.remove("abierto");

    boton.classList.remove("abierto");

    boton.setAttribute("aria-expanded", "false");

    boton.setAttribute("aria-label", "Abrir menú");
    
  }

  boton.addEventListener("click", function () 
  {
    
    var abierto = menu.classList.toggle("abierto");

    boton.classList.toggle("abierto", abierto);

    boton.setAttribute("aria-expanded", abierto ? "true" : "false");

    boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");

  });

  menu.addEventListener("click", function (e) 
  {

    if (e.target.closest("a")) cerrar();

  });

  document.addEventListener("keydown", function (e) 
  {

    if (e.key === "Escape") cerrar();

  });

  window.addEventListener("resize", function () 
  {

    if (window.innerWidth > 1200) cerrar();

  });
  
})();
