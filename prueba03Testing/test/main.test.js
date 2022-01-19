const operacion = require('../main.js');

//PRUEBAS DE SUMA//////////////////////////////////////////
test('La suma de 1 mas 2', () => {
    let numero1 = 1;
    let numero2 = 2;
    let resultado = 3;
    expect(operacion(numero1,numero2,"+")).toBe(resultado);
});

test('La suma de 150 mas 325', () => {
    let numero1 = 150;
    let numero2 = 325;
    let resultado = 475;
    expect(operacion(numero1,numero2,"+")).toBe(resultado);
});

test('La suma de 1876 mas 2634', () => {
    let numero1 = 1876;
    let numero2 = 2634;
    let resultado = 4510;
    expect(operacion(numero1,numero2,"+")).toBe(resultado);
});

//PRUEBAS DE RESTA//////////////////////////////////////////
test('La resta de 2 menos 1', () => {
    let numero1 = 2;
    let numero2 = 1;
    let resultado = 1;
    expect(operacion(numero1,numero2,"-")).toBe(resultado);
});

test('La resta de 862 menos 139', () => {
    let numero1 = 862;
    let numero2 = 139;
    let resultado = 723;
    expect(operacion(numero1,numero2,"-")).toBe(resultado);
});

test('La resta de 2987 menos 1423', () => {
    let numero1 = 2987;
    let numero2 = 1423;
    let resultado = 1564;
    expect(operacion(numero1,numero2,"-")).toBe(resultado);
});

//PRUEBAS DE MULTIPLICACION/////////////////////////////////
test('La multiplicacion de 2 por 2', () => {
    let numero1 = 2;
    let numero2 = 2;
    let resultado = 4;
    expect(operacion(numero1,numero2,"*")).toBe(resultado);
});

test('La multiplicacion de 26 por 12', () => {
    let numero1 = 26;
    let numero2 = 12;
    let resultado = 312;
    expect(operacion(numero1,numero2,"*")).toBe(resultado);
});

test('La multiplicacion de 254 por 23', () => {
    let numero1 = 254;
    let numero2 = 23;
    let resultado = 5842;
    expect(operacion(numero1,numero2,"*")).toBe(resultado);
});
//PRUEBAS DE DIVISION//////////////////////////////////////
test('La division de 6 entre 3', () => {
    let numero1 = 6;
    let numero2 = 3;
    let resultado = 2;
    expect(operacion(numero1,numero2,"/")).toBe(resultado);
});

test('La division de 653 entre 36', () => {
    let numero1 = 653;
    let numero2 = 36;
    let resultado = 18;
    expect(operacion(numero1,numero2,"/")).toBe(resultado);
});

test('La division de 346 entre 3', () => {
    let numero1 = 346;
    let numero2 = 3; 
    let resultado = 115;
    expect(operacion(numero1,numero2,"/")).toBe(resultado);
});