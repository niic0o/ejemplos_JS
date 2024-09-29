// Consejo: ejecutar la extension quokka para ver la magia.
let x = 8;

x += 12;
console.log(x);

x *= 10;
console.log(x);

//conversion implicita
x = '100'
let a = Number(x) + Number(x);
console.log(a);
console.log(typeof(a));

//conversion explicita
let str = x + ' ' + a;
console.log(str);
console.log(typeof(str));

str = null;
console.log(str);

let tiene_algo = Boolean(str);
console.log("Tiene algo str?: " + tiene_algo);

tiene_algo = Boolean(a);
console.log("Tiene algo a?: " + tiene_algo);

let e = 50
// retorna el modulo(resto) de e divido z
function modulo (z){
    return (e % z); 
}

console.log(modulo(2));
console.log(modulo(17));
console.log(modulo(35));
console.log(modulo(26));
console.log(modulo(25));

