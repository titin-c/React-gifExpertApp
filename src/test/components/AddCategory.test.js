import React  from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';

      input.simulate('change', {target: { value }});
    });
    
    test('NO debe postear la información con submit vacio', () => {

        //wrappeamos el formulario y simulamos el submit
      wrapper.find('form').simulate( 'submit', { preventDefault(){} });

      expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        //simular el inputChange
        const value = 'Hola pepe';
        wrapper.find('input').simulate('change', {target: { value }});

        //simular el submit
        wrapper.find('form').simulate( 'submit', { preventDefault(){} });

        //setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        //setCategories se debe de haber llamada 1 vez
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //setCategories se debe de haber llamado con cualquier función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //el valor del input debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('')

      });
});
