const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('it adds commas', () => {
    expect(addCommas(1)).toEqual('1');
    expect(addCommas(1000000)).toEqual('1,000,000');
    expect(addCommas(987654321)).toEqual('987,654,321');
    expect(addCommas(6)).toEqual('6');
    expect(addCommas(-10)).toEqual('-10');
    expect(addCommas(-2345)).toEqual('-2,345');
    expect(addCommas(-12345678)).toEqual('-12,345,678');
    expect(addCommas(312123.55)).toEqual('312,123.55');
  })
});
