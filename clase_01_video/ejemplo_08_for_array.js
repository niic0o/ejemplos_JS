const arreglo = []
for (let i=0; i<20; i++){
    arreglo.push(i);
}
console.log("arreglo rellenado", arreglo);

for (let j=0; j<20; j++){
    arreglo.pop();
}
console.log("arreglo vaciado", arreglo);

//do_while
const corte = 22;
let i = 0;
console.log("cuento hasta: " + corte);
do{
    console.log(i++);
}while(i <= corte);