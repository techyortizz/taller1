const sumar = (num1, num2) =>{
    const response = (num1>0 && num2 >0) ? num1+num2 : "no se puede realizar la suma"
    return response;
}
let numero1 = parseFloat( prompt('dame el primer valor de la suma'));
let numero2 = parseFloat(prompt('dame el segundo valor de la suma'));;
//
let suma= sumar(numero1,numero2)
//
alert(suma);

const resta1 = (num1, num2) =>{
    const response = (num1<0 && num2 >0) ? num1-num2 : "no se puede realizar la suma"
    return response;
}
let numeroresta1 = parseFloat( prompt('dame el primer valor de la resta'));
let numeroresta2 = parseFloat(prompt('dame el segundo valor de la resta'));;
//
let resta= resta(numero1,numero2)
//
alert(resta);

    
    