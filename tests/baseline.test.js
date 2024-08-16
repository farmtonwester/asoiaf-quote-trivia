/**
 * @jest-environment jsdom
*/
import {getQuote, verifyAnswer} from "../app.js";

test('getQuote returns an object', function() {
    const result = getQuote();
    expect(result).toBeInstanceOf(Object);
});

test('getQuote returns a correctly structured quote object', () => {
    const result = getQuote();
    expect(result["quote"]).toBeInstanceOf(String)
    expect(result["id"]).toBeInstanceOf()
    expect(result["character"]).toBeInstanceOf()
    expect(result["source"]).toBeInstance()
});