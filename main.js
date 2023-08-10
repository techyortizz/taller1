'use strict';
//1. pedir dos numero positivos y realizar una suma 
// ds:suma
//de: son 2 numeros,positivos
const sumar = (num1, num2) =>{
    const response = (num1>0 && num2 >0) ? num1+num2 : "no se puede realizar la suma"
    return response;
}
let numero1 = parseFloat( prompt('dame el primer valor'));
let numero2 = parseFloat(prompt('dame el segundo valor'));;
//
let suma= sumar(numero1,numero2)
//
alert(suma);
