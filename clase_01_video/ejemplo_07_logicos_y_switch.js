//Usar extension quokka para ver la magia
function valorDeVerdad(p, q, operador) {
    switch (operador) {
    case 'AND':
      return p && q;
    case 'OR':
      return p || q;
    case '>':
      return p > q;
    case '<':
      return p < q;
    case '>=':
      return p >= q;
    case '<=':
      return p <= q;
    case '===':
      return p === q;
    case '!==':
      return p !== q;
    default:
      throw new Error(`Operador lógico no válido: ${operador} o algo salio mal`);
  }
}

console.log(valorDeVerdad(3, 5,'>'));
console.log(valorDeVerdad(3, 5, '>'));
console.log(valorDeVerdad('a', 'b', '<'));
console.log(valorDeVerdad(3, 5, '<'));
console.log(valorDeVerdad(100, 101, '>='));
console.log(valorDeVerdad(100, 5, '>='));
console.log(valorDeVerdad(5, 5, '<='));
console.log(valorDeVerdad(5, 3, '<='));
console.log(valorDeVerdad(5, Number('5'), '==='));
console.log(valorDeVerdad(5, 'cinco', '==='));
console.log(valorDeVerdad('juan', 5, '!=='));
console.log(valorDeVerdad('danilo', 'danilo', '!=='));

//tabla de verdad
console.log(valorDeVerdad(true, true, 'AND'));
console.log(valorDeVerdad(1, 1, 'AND'));
console.log(valorDeVerdad(1, 0, 'AND'));
console.log(valorDeVerdad(true, false, 'AND'));
console.log(valorDeVerdad(false, false, 'AND'));
console.log(valorDeVerdad(true, false, 'OR'));
console.log(valorDeVerdad(false, false, 'OR'));
console.log(valorDeVerdad(true, true, 'OR'));

