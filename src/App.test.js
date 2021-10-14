import posFinal from "./App"

describe("Superficie de desplazamiento", () => {
    it("Deberia delvover la cadena 5,5 para una cadena que solo tiene la cadena 5", () => {
      expect(posFinal("5")).toEqual("5,5");
    });
    it("Deberia delvover la cadena 7,7 para una cadena que solo tiene la cadena 7", () => {
        expect(posFinal("7")).toEqual("7,7");
    });
    it("Deberia delvover la cadenas 4,7 para una cadena separada por coma 4,7", () => {
        expect(posFinal("4,7")).toEqual("4,7");
    });
});

describe("Posicion Inicial", () => {
    it("Deberia delvover la cadena 1,3 para una cadena con superficie y posicicion inicial 5,6/1,3", () => {
      expect(posFinal("5,6/1,3")).toEqual("5,6/1,3");
    });

});