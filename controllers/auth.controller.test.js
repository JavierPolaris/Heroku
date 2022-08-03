


const user = {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    nombre:"Mihai",
    apellido: "Mardale",
    telefono: "697869786",
    telefonoMal: "879607960"
   
};
const objExpReg = () => user;

describe('Matchers Strings', () => {
    const exp = objExpReg();
    test('Comprobamos si la respuesta es correcta', () => {
        expect(exp.responseOK).toMatch(/OK/);
    });
    test('Comprobamos si la respuesta es incorrecta', () => {
        expect(exp.responseFAIL).toMatch(/FAIL/);
    });
    test('Comprobamos el nombre', () => {
        expect(exp.nombre).toMatch((/^[a-z ,.'-]+$/i));
    })
    test('Comprobamos el nombre', () => {
        expect(exp.nombre).toMatch((/^[a-z ,.'-]+$/i));
    })
    test('Comprobamos el apellido', () => {
        expect(exp.apellido).toMatch((/^[a-z ,.'-]+$/i));
    })
    test('Comprobamos el telefono', () => {
        expect(exp.telefono).toMatch((/(6|7)[ -]*([0-9][ -]*){8}/));
    })
    test('Comprobamos un telefono no valido', () => {
        expect(exp.telefonoMal).toMatch((/(6|7)[ -]*([0-9][ -]*){8}/));
    })
});