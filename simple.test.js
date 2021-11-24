const isInteger = require("./simple");

test("isInteger passes for integer value", () => {
    expect(isInteger(1)).toBe(true);
});

test("isInteger fails for non-integer value", () => {
    expect(isInteger(1.23)).toBe(false);
});