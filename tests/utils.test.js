/**
 * @jest-environment jsdom
 */

import updateElement from "../utils.js"


describe("update element", () => {
    test('replaces innerText of target element', function() {
        document.body.innerHTML = "<div id=\"my-id\"></div>"

        updateElement("my-id", "some text")
        const targetElement = document.getElementById("my-id")
        expect(targetElement.innerHTML).toEqual("some text")
    });
    
})
