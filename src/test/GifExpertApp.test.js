import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Testeo del componente GifExpertApp', () => {

    test('Debe mostrar una snapshot correcta', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista con las categorías', () => {
        const categories = ["Warzone", "Pokemón"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});