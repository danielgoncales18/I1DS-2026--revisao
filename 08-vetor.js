// criando variaveis do tipo array (vetor)

var dinos = ["tiranosauro rex ","estegossauro","brontossauro", "triceratopos"];

// imprimindo os dados em forma de linha
console.log(dinos);
// imprimindo os dados em forma de tabelas
console.table(dinos);

// length -> "tamanho" do array (quantidade de elementos)
console.log(" o vetor tem",dinos.length, "elementos");

// imprimir elementos a partir do indice
 console.log(dinos[2]);

 // push -> adiciona um novo elemento no final da fila 
 dinos.push("anquilossauro");
 console.log("o vetor agora tem", dinos.length, "elementos");
console.table(dinos);
console.log("o vetor agora tem", dinos.length,"elementos");

// unshift -> adiciona um novo elemento no inicio da fila 
dinos.unshift("velociraptor");
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// obter um elemento a partir do indice
console.log("1")