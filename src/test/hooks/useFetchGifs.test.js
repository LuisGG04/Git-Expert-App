// import React from 'react';
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('Testeo en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        // const {data, loading} = useFetchGifs("warzone");
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("Warzone"));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un areglo de imagenes y generar el loading en "false" ', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("Warzone"));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(12);
        expect(loading).toBe(false);
    });
    
});