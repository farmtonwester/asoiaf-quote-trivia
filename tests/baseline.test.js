/**
 * @jest-environment jsdom
*/

import {getQuote, verifyAnswer} from "../app.js";

test('getQuote returns an object', () => {
    let temp = getQuote(); 
    expect(temp).toBeInstanceOf(Object);
});

test('getQuote returns a correctly structured quote object', () => {
    const temp = getQuote();
    expect(temp["id"]).toBeInstanceOf(Number);
    expect(temp["quote"]).toBeInstanceOf(String);
    expect(temp["character"]).toBeInstanceOf(String);
    expect(temp["source"]).toBeInstanceOf(String);
});