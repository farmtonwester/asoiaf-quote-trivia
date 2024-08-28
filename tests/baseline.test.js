
import {fetchQuotes, verifyAnswer} from "../app.js";

 test('fetchQuotes returns an object', async () => {
     await expect(fetchQuotes()).toBeInstanceOf(Object)
});

test('fetchQuotes returns a correctly structured quote object', async () => {
    const result_1 = await fetchQuotes();
    expect(result_1.length).toEqual(5)
    // expect(typeof result_1["quote"]).toBe("string");
    // expect(typeof result_1["character"]).toBe("string");
    // expect(typeof result_1["source"]).toBe("string");
    // expect(typeof result_1["id"]).toBe("string");
});