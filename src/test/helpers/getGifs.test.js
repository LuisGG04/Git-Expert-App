import { getGifs } from "../../helpers/getGifs"
import "@testing-library/jest-dom"

describe('Testeo del componente getGifs.js', () => {
    
    test('Debe de traer 12 elementos', async() => {
        const gifs = await getGifs("warzone")
        expect(gifs.length).toBe(12)
    })
    
    test('Debe de traer 12 elementos', async() => {
        const gifs = await getGifs("")
        expect(gifs.length).toBe(0)
    })

})
