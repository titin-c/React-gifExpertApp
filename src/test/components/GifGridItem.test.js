import React  from 'react';

const { shallow } = require("enzyme");
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  // const classe = 'animate__fadeIn';
  const wrapper= shallow( <GifGridItem title={title} url={url} /> )
  
    test('debe de mostrar el componente correctamente', () => {
           
      expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => {

      const p = wrapper.find('p');
      expect(p.text().trim()).toBe( title );

    });
    
    test('Debe tener una imagen con src igual a url y alt igual a title', () => {
      
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la class animate__fadeIn', () => {
      const div = wrapper.find('div');
      const classe = div.prop('className');

      expect(classe.includes('animate__fadeIn')).toBe(true);
    });
    
    
    

});
