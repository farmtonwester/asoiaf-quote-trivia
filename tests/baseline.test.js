
import {getQuote, verifyAnswer} from "../app.js";

 test('getQuote returns an object', async () => {
     await expect( getQuote()).toBeInstanceOf(Object)
});

test('getQuote returns a correctly structured quote object', async () => {
    const result_1 = await getQuote();
    expect(typeof result_1["quote"]).toBe("string");
    expect(typeof result_1["character"]).toBe("string");
    expect(typeof result_1["source"]).toBe("string");
    expect(typeof result_1["id"]).toBe("string");
});