import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con fetch GetGisf', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect(gifs.length).toBe(10);
    });

    test('no enviar categoria ', async() => {
        const gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
    });
    
});
