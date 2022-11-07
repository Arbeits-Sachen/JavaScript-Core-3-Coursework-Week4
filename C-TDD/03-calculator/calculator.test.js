const add = require("./calculator");

test("returns 0 if input is empty", function ()
{
    let input = "";
    expect(add(input)).toEqual(0);
});

test("returns the number if there is one number", function ()
{
    let input = "1";

    expect(add(input)).toEqual(1);
});

test("returns sum of numbers if there are two numbers", function ()
{
    let input = "1,2";

    expect(add(input)).toEqual(3);
});

test("returns sum of numbers if input is more than 2 numbers", function ()
{
    let input = "1,2,3,4,5,6";

    expect(add(input)).toEqual(21);
});

test("numbers bigger than 1000 are not allowed", function ()
{
    let input = "1,1001";

    expect(add(input)).toEqual(1);
});

test("throws error", function ()
{
    expect(() => add("-1").toThrowError("negatives not allowed: "));
});
