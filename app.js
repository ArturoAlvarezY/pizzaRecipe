/*
500 gramos de harina de trigo
300 ml de agua tibia
2 cucharadas de aceite de oliva
1 cucharadita de azúcar
1 cucharadita de sal
7 gramos de levadura seca (un sobre)

*/



let eggs= '3 huevos,';
let wheatFlour= '500 gr de harina,';
let water='300 ml de agua,';
let suggar='1 cucharada de azucar,';
let dryYeast= '7 cucharadas de levaduras,';
let salt= '1 cucharada de sal';

let mass='1. Para hacer la masa, debemos mezclar: '


const mixingMass=(str)=>{
    let readyMass;
    readyMass=(mass+  eggs+ ' ' + wheatFlour+ ' ' + ' '  + water + ' '+ suggar+ ' '+ dryYeast+ ' ' + salt);
    return readyMass;
}
console.log(mixingMass())
   /*
   Segundo paso, 

Salsa, Vierte aproximadamente 1/2 taza de salsa de tomate en el centro de la masa estirada.   
Queso, Espolvorea de 1 a 1 1/2 tazas de queso mozzarella rallado sobre la salsa, asegurándote de cubrir la superficie de manera uniforme.
Tomates, usa de 1 a 2 tomates medianos.
*/

let sauce= '1/2 tazas de salsa de tomate';
let cheese= '1/2 taza de queso'
let tomatoes= '2 tomates medianos';
let onTheMass='2. En la masa, agrega los siguientes ingredientes: '

const addInTheMass=()=>{
    let verting;
    verting= (onTheMass+ ' ' + ' ' + sauce + ' ' + cheese+ ' '+ tomatoes)
    return verting;
}

console.log(addInTheMass());

/* horno 

temperatura: 482°F;
tiempo: 15 minutos;

*/

let time= '15 minutos';
let temp= 'a una temperatura de 482°F';
let oven='Una vez listo el paso anterior, poner en el horno durante'

const bringToTheOven=()=>{
    let cooking;
    cooking= oven+ ' ' + time+ ' '+ temp;
    return cooking;
}

console.log(bringToTheOven());
