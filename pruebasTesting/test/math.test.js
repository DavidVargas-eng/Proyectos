const math = require('../math')

test('La suma de 1 + 2 funciona ok',()=>{
    expect(math.suma(1,2)).toBe(3)
})

afterAll(() => console.log("Las pruebas han finalizado"));

/* afterEach(() => console.log('Despues de cada prueba'));
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas')); */