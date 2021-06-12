function Nodo(val) {
  this.val = val;
  this.hijo = {};
}
function buildTrie(...words) {
  var raiz = new Nodo();
  
  words.forEach(function (palabra){
    var pnt = raiz;
    for( let i = 0 ; i < palabra.length ; i++ ){
      let letra = palabra[i];
      console.log(Object.values(pnt)[0], i)

      if(pnt.hijo[letra] !== undefined){
        pnt=pnt.hijo[letra];
      }else{
        var nodo = new Nodo(letra);
        pnt.hijo[letra] = nodo;
        pnt = nodo;
      }
    }
    pnt.hijo=null;
  });
  
  
  return raiz;
}
console.log(buildTrie('tree', 'l'))
