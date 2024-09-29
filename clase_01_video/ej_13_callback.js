let contador = 0;
let desde = 1;
let hasta = 19;

function contar (desde,hasta){
    acc = desde;
    for(desde;desde <= hasta; desde++){
        console.log(desde);
        acc++; 
    }
    return acc-1;
}

function test(desde, hasta, callback){
    var acc = 0
    console.log("llamada a contar");
    acc = callback(desde,hasta);
    console.log("el conteo ha finalizado en:" + acc);
    console.log("se puede seguir contando donde quedamos?");
    acc = callback(acc,47.9);
    console.log("lo logramos, el conteo ha finalizado en: " + acc);
}

test(desde,hasta,contar);
