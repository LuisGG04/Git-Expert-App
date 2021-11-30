import React from "react"
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Test del componente AddCategory en sus funciones', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    
    beforeEach(()=> {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })
    
    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Evaluación en la caja de texto', () => {
        const input = wrapper.find("input")
        const value = "Hola Mundo"
        input.simulate("change",{target:{value}})

        expect(wrapper.find("p").text().trim()).toBe(value)
    })

    test('Debe de mostrar el formulario sin postear la información', () => {
        wrapper.find("form").simulate("submit",{preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de text', () => {
        const input = wrapper.find("input")
        const value = "Hola Mundo"
        input.simulate("change",{target:{value}})
        
        expect(wrapper.find("p").text().trim()).toBe(value)
        wrapper.find("form").simulate("submit",{preventDefault(){}})
        expect(setCategories).toHaveBeenCalled()

        expect(input.prop("value")).toBe("")
    })
    
})
