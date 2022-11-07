let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function ()
{
    input = 1;
    expect(convertToOldRoman(input)).toEqual("I");
});

test("returns IIII if passed 4 as an argument", function ()
{
    input = 4;
    expect(convertToOldRoman(input)).toEqual("IIII");
});

test("returns VIIII if passed 9 as an argument", function ()
{
    input = 9;
    expect(convertToOldRoman(input)).toEqual("VIIII");
});

test("returns LXXXXVIIII if passed 99 as an argument", function ()
{
    input = 99;
    expect(convertToOldRoman(input)).toEqual("LXXXXVIIII");
});

test("returns CCCC if passed 400 as an argument", function ()
{
    input = 400;
    expect(convertToOldRoman(input)).toEqual("CCCC");
});

test("returns DCCCCLXXXXVIIII if passed 999 as an argument", function ()
{
    input = 999;
    expect(convertToOldRoman(input)).toEqual("DCCCCLXXXXVIIII");
});
