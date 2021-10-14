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
    it("Deberia delvover la cadena 5,5/1,3 para una cadena con superficie y posicicion inicial 5,6/1,3", () => {
        expect(posFinal("5/1,3")).toEqual("5,5/1,3");
      });
    it("Deberia delvover la cadena 5,6/1,3 para una cadena con superficie y posicicion inicial 5,6/1,3", () => {
      expect(posFinal("5,6/1,3")).toEqual("5,6/1,3");
    });
    it("Deberia delvover la cadena 5,6/1,3 N para una cadena con superficie y posicicion inicial 5,6/1,3 N", () => {
        expect(posFinal("5,6/1,3 N")).toEqual("5,6/1,3 N");
      });
});

describe("Movimiento auto", () => {
    it("Deberia devolver la cadena 5,7/1,3 O para una cadena 5,7/1,3 N/I", () => {
        expect(posFinal("5,7/1,3 N/I")).toEqual("5,7/1,3 O");
    });
    it("Deberia devolver la cadena 5,7/1,3 S para una cadena 5,7/1,3 O/I", () => {
        expect(posFinal("5,7/1,3 O/I")).toEqual("5,7/1,3 S");
    });
    it("Deberia devolver la cadena 5,7/1,3 N para una cadena 5,7/1,3 E/I", () => {
        expect(posFinal("5,7/1,3 E/I")).toEqual("5,7/1,3 N");
    });
});

describe("Salto auto", () => {
    it("Deberia devolver la cadena 5,7/3,1 E para una cadena 5,7/1,1 E/S", () => {
        expect(posFinal("5,7/1,1 E/S")).toEqual("5,7/3,1 E");
    });
    it("Deberia devolver la cadena 5,7/5,1 E para una cadena 5,7/5,1 E/S. En este caso no debe salirse de los limites de la SUP", () => {
        expect(posFinal("5,7/5,1 E/S")).toEqual("5,7/5,1 E");
    });
});