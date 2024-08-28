/**
 * @jest-environment jsdom
 */

import { getQuote } from "../app.js";
import updateElement from "../utils.js"


describe("updateElement", () => {
    test('replaces innerText of target element', function() {
        document.body.innerHTML = "<div id=\"my-id\"></div>"

        updateElement("my-id", "some text")
        const targetElement = document.getElementById("my-id")
        expect(targetElement.innerHTML).toEqual("some text")
    });
    
    // test('is called successfully when getQuote function is executed', async () => {
    //     const temp = await getQuote();
    //     const quoteDiv = document.getElementById("quote-card");

    //     expect(quoteDiv.innerHTML).toEqual(temp["quote"]);
    // })
});
