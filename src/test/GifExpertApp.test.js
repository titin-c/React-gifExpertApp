
import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas sobre el componente <GifExpertApp />', () => {
  
    
    test('debe de mostrarse correctamente', () => {

        const wrapper = shallow( <GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
       
    });

    test('debe mostrar una lista de categorías', () => {
      
      const categories = ['Pikatchu', 'Goku'];
      const wrapper = shallow( <GifExpertApp defaultCategories={ categories}/>);

      expect(wrapper).toMatchSnapshot();
      expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
    
});