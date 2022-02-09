import React  from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid />', () => {
  
    const category = 'pikatchu';
    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
       
    });

    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'prueba de title'
        },
        {
            id: '123',
            url: 'https://google.com',
            title: 'prueba de title'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
      
        const wrapper = shallow( <GifGrid category={category}/>);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.cargando').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe( gifs.length);
        
    });
    
    
    
});
