
function proximaPagina(pagina) {
  const links = [
    "pagina2.html",
    "pagina3.html",
    "pagina4.html"
  ];
  window.location.href = links[pagina - 1];
}
