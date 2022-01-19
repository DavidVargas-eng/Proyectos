const numerosRomanos = require('../numerosRomanos');


test('cuando el numero es 1', () => {
    expect(numerosRomanos(1)).toBe("I");
});

test('cuando el numero es 2', () => {
    expect(numerosRomanos(2)).toBe("II");
});

test('cuando el numero es 3', () => {
    expect(numerosRomanos(3)).toBe("III");
});

test('cuando el numero es 4', () => {
    expect(numerosRomanos(4)).toBe("IV");
});

test('cuando el numero es 5', () => {
    expect(numerosRomanos(5)).toBe("V");
});

test('cuando el numero es 6', () => {
    expect(numerosRomanos(6)).toBe("VI");
});

test('cuando el numero es 7', () => {
    expect(numerosRomanos(7)).toBe("VII");
});

test('cuando el numero es 8', () => {
    expect(numerosRomanos(8)).toBe("VIII");
});

test('cuando el numero es 9', () => {
    expect(numerosRomanos(9)).toBe("IX");
});

test('cuando el numero es 10', () => {
    expect(numerosRomanos(10)).toBe("X");
});

test('cuando el numero es 20', () => {
    expect(numerosRomanos(20)).toBe("XX");
});

test('cuando el numero es 30', () => {
    expect(numerosRomanos(30)).toBe("XXX");
});

test('cuando el numero es 40', () => {
    expect(numerosRomanos(40)).toBe("XL");
});

test('cuando el numero es 50', () => {
    expect(numerosRomanos(50)).toBe("L");
});

test('cuando el numero es 60', () => {
    expect(numerosRomanos(60)).toBe("LX");
});

test('cuando el numero es 70', () => {
    expect(numerosRomanos(70)).toBe("LXX");
});


test('cuando el numero es 80', () => {
    expect(numerosRomanos(80)).toBe("LXXX");
});

test('cuando el numero es 90', () => {
    expect(numerosRomanos(90)).toBe("XC");
});

test('cuando el numero es 100', () => {
    expect(numerosRomanos(100)).toBe("C");
});

test('cuando el numero es 499', () => {
    expect(numerosRomanos(499)).toBe("CDXCIX");
});test('cuando el numero es 498', () => {
    expect(numerosRomanos(498)).toBe("CDXCVIII");
});

test('cuando el numero es 500', () => {
    expect(numerosRomanos(500)).toBe("D");
});

test('cuando el numero es 999', () => {
    expect(numerosRomanos(999)).toBe("CMXCIX");
});

test('cuando el numero es 1000', () => {
    expect(numerosRomanos(1000)).toBe("M");
});

test('cuando el numero es 1999', () => {
    expect(numerosRomanos(1999)).toBe("MCMXCIX");
});

test('cuando el numero es 5999', () => {
    expect(numerosRomanos(5999)).toBe("VCMXCIX");
}); 