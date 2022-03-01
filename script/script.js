let nombrePlanetas = Array ('Tierra','Marte');
let distancia = [5,3,'67'];
const tamano = [];

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamano)

for (const key in distancia) {
    if (distancia[key]=== '5'){
        console.log('Se encontró la distancia')
    }
    else {
        console.log('No se encontró la distancia')
    }
}