/**
 * @jest-environment jsdom
*/

import {getQuote, verifyAnswer} from "../app.js";

 test('getQuote returns an object', async () => {
    let temp = getQuote(); 
    expect(temp).toBeInstanceOf(Object);
});

test('getQuote returns a correctly structured quote object', async () => {
    const result_1 = getQuote();
    expect(result_1["quote"]).toBeInstanceOf(String);
    expect(result_1["id"]).toBeInstanceOf(Number);
    expect(result_1["character"]).toBeInstanceOf(String);
    expect(result_1["source"]).toBeInstanceOf(String);
});