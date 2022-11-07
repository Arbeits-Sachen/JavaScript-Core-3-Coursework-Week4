let verify = require("./password");

test("returns password rejected if password is less than 8 characters", function ()
{
    input = "1234";
    expect(verify(input)).toEqual("Password rejected");
});

test("returns password rejected if password is null", function ()
{
    input = null;
    expect(verify(input)).toEqual("Password rejected");
});
  
test("returns password rejected if password doesn't include uppercase letters", function ()
{
    expect(verify("123456789a")).toEqual("Password rejected");
});

test("returns password rejected if password has no numbers", function ()
{
    expect(verify("asdfghjKl")).toEqual("Password rejected");
});
