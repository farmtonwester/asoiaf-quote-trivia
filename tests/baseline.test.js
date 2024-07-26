/**
 * @jest-environment jsdom
*/
import {getQuote, verifyAnswer} from "../app.js";

// First Test
test('getQuote returns an object', function() {
    expect(getQuote().toBe('object'));
})