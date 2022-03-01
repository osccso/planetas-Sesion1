let nombrePlanetas = Array ('Tierra','Marte');
let distancia = [5,3,'67'];
const tamano = [];

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamano)
//ciclowhile
let i=0;
while (i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i])
    i+=1
}
//ciclo for
for (let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}

//recorrer informacion de planetas
for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}
//recorrer planeta 
for (const planeta of nombrePlanetas){
    console.log(planeta)
}
for (const key in distancia) {
    if (distancia[key]=== '5'){
        console.log('Se encontró la distancia')
    }
    else {
        console.log('No se encontró la distancia')
    }
}
nombrePlanetas.forEach((value, index, array)=> {
    console.log('planeta',index,value);
})
nombrePlanetas.map((planetas,index)=>{
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamano[index]}`)
    )
})
let resultadoMap = nombrePlanetas.map((planetas,index)=>{
    return(`El planeta ${planetas} tiene tamaño de :${tamano[index]}`)
})
console.log(resultadoMap)