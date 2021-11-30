import "@testing-library/jest-dom"
import React from "react"
import { shallow } from "enzyme"
import {GifGridItem} from "../../components/GifGridItem"

describe('Testeo en el componente GifGridItem', () => {

    const title = "Hola Mundo"
    const url = "https://localhost/"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    
    test('Debe de mostrar correctamente al componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar un parrafo con texto', () => {
        const p = wrapper.find("p")
        expect(p.text().trim()).toBe(title)
    })

    test('Debe de mostrar la imagen igual a url y alt', () => {
        const img = wrapper.find("img")
        expect(img.prop("src")).toBe(url)
        expect(img.prop("alt")).toBe(title)
    })

    test('Debe de tener la clase "animate__fadeIn"', () => {
        
        const div = wrapper.find("div")
        const className = div.prop("className")
        expect(className.includes("animate__fadeIn")).toBe(true)
    })
    
})

