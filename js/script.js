const links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Conteúdo Bloqueado");
  });
}

document.addEventListener("copy", function(event) {
  event.preventDefault();
  alert("Conteúdo Bloqueado");
});