let getLargestNumber = require("./largest-number");

let input = [3, 21, 88, 4, 36];

test("returns largest number in array", function ()
{
  // Arrange
  const expected = 88;

  // Act  
  // Assert
  
  expect(getLargestNumber(input)).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;


test("original array wasnt changed", function ()
{
  expect(input).toEqual([3, 21, 88, 4, 36]);
});

// also test that the original array hasn't changed
