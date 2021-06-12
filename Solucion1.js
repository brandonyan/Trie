class Nodo {
  constructor(letra = "") {
    this.val = letra;
    this.hijo = {};
  }
}
function buildTrie(...words) {
  var raiz = new Nodo();

  words.forEach(function (palabra) {
    var pnt = raiz;
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];

      if (pnt.hijo === null) {
        pnt.hijo = {};
      }
      if (pnt.hijo[letra]) {
        pnt = pnt.hijo[letra];
      } else {
        var nodo = new Nodo(letra);
        pnt.hijo[letra] = nodo;
        pnt = nodo;
      }
    }
    if (palabra !== "") pnt.hijo = null;
  });

  return raiz;
}
console.log(buildTrie("A", "to", "tea", "ted", "ten", "i", "in", "inn"));
