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