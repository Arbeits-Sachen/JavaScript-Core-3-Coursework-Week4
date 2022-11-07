let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function ()
{
    input = 1;
    expect(convertToNewRoman(input)).toEqual("I");
});

test("returns IV if passed 4 as an argument", function ()
{
    input = 4;
    expect(convertToNewRoman(input)).toEqual("IV");
});

test("returns IX if passed 9 as an argument", function ()
{
    input = 9;
    expect(convertToNewRoman(input)).toEqual("IX");
});

test("returns XCIX if passed 99 as an argument", function ()
{
    input = 99;
    expect(convertToNewRoman(input)).toEqual("XCIX");
});

test("returns CD if passed 400 as an argument", function ()
{
    input = 400;
    expect(convertToNewRoman(input)).toEqual("CD");
});

test("returns CMXLIV if passed 999 as an argument", function ()
{
    input = 999;
    expect(convertToNewRoman(input)).toEqual("CMXCIX");
});
