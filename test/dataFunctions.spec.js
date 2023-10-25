import { filtro_letalidad,filtro_reino,filtro_letalidadmb } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//console.log(fakeData);

const TEST_FILTRO_LEVEL = "Alto";
const TEST_FILTRO_REINO = "Earthrealm";
const TEST_FILTRO_MB = "Moderado-bajo";

describe("filtro_letalidad", () => {
  it("deberia devolver 2 personajes al filtro letalidad Alto", () => {
    const letalidad_alta = filtro_letalidad(fakeData, TEST_FILTRO_LEVEL);
    expect(letalidad_alta.length).toBe(2);
  });
});

describe("filtro_reino", () => {
  it("deberia devolver 4 personajes al filtro reino Earthrealm", () => {
    const reino_earthrealm = filtro_reino(fakeData, TEST_FILTRO_REINO);
    expect(reino_earthrealm.length).toBe(4);
  });
});

describe("filtro_letalidadmb", () => {
  it("deberia devolver 1 personaje al filtro moderado-bajo", () => {
    const letalidad_mbajo = filtro_letalidadmb(fakeData, TEST_FILTRO_MB);
    expect(letalidad_mbajo.length).toBe(1);
  });
});