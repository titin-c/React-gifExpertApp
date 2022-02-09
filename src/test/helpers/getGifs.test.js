import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
  
    test('debe traer 12 elementos', async() => {
      
        const gifs = await getGifs(' One Punch ');

        expect(gifs.length).toBe(12)
    });

    test('que pasa si manda vacio', async() => {
      
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
    });
    

});
