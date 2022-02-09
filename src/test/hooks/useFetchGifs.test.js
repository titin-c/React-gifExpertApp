import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {


    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate({timeout:3500});

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate({timeout:3500});

        const { data, loading } = result.current;

        expect( data.length ).toBe( 12 );
        expect( loading ).toBe( false );
    });
    
    
    
})
