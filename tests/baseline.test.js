/**
 * @jest-environment jsdom
*/

import {getQuote, verifyAnswer} from "../app.js";

 test('getQuote returns an object', async () => {
     await expect(await getQuote()).resolves.toBeInstanceOf(Object)
});

test('getQuote returns a correctly structured quote object', async () => {
    const result_1 = await getQuote();
    await expect(result_1["quote"]).toBeInstanceOf(String);
    await expect(result_1["id"]).toBeInstanceOf(Number);
    await expect(result_1["character"]).toBeInstanceOf(String);
    await expect(result_1["source"]).toBeInstance(String);
});