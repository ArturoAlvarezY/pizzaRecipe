let eggs= '3 huevos,';
let wheatFlour= '500 gr de harina,';
let water='300 ml de agua,';
let suggar='1 cucharada de azucar,';
let dryYeast= '7 cucharadas de levaduras,';
let salt= '1 cucharada de sal';
let mass='1. Para hacer la masa, debemos mezclar: ';

const mixingMass=()=>{
    let readyMass;
    readyMass= ` \n \n ${mass} ${eggs} ${wheatFlour} ${water} ${suggar} ${dryYeast} ${salt}`;
    return readyMass;
}

let sauce= '1/2 tazas de salsa de tomate';
let cheese= '1/2 taza de queso';
let tomatoes= '2 tomates medianos';
let onTheMass='2. En la masa, agrega los siguientes ingredientes: ';

const addInTheMass=()=>{
    let verting;
    verting= `\n \n ${onTheMass} ${sauce} ${cheese} ${tomatoes}`;
    return verting;
}

let time= '15 minutos';
let temp= 'a una temperatura de 482°F';
let oven='Una vez listo el paso anterior, poner en el horno durante';
const bringToTheOven=()=>{
    let cooking;
    cooking= `\n \n 3. ${oven} ${time} ${temp}`;
    return cooking;
}

let pizzaChoping= '4. Pica la pizza con un cortador de pizzas';
let dish= 'prepara tus platos para servir la pizza';
let enjoy= 'y por ultimo, disfruta crack';

const enjoyPizza = () =>
{
let justEnjoy;
justEnjoy= `\n \n ${pizzaChoping}, ${dish}, ${enjoy}`;
return justEnjoy
};

const pepperoni=()=>{

    return `${mixingMass()} ${addInTheMass()} ${bringToTheOven()} ${enjoyPizza()}`;
}


const prompt = require('prompt-sync')();

const Pizza = prompt('¿Cuál Pizza quieres mi panita? ');

if(Pizza==='pepperoni'){
    console.log('\n Preparemos la pizza juntos!');
    console.log(`${pepperoni()}`);
}
else{
   console.log('te puedo dar unas arepas mano') 
}




