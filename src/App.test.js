import moverAuto from "./App"

describe("Controlador de auto", () => {
    it("Deberia avanzar una posicion", () => {
      expect(moverAuto()).toEqual("A");
    });
    
  });