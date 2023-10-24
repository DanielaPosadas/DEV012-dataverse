import { filtroLet0, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

const TEST_FILTRO_LEVEL = 'Alto'

describe(filtroLet0, (fakeData) => {

  it('returns `Scorpion y Sub Zero for`' + TEST_FILTRO_LEVEL + '', () => {
    expect(filtroLet0(TEST_FILTRO_LEVEL)).toBe('Scorpion' + 'Sub Zero');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
