let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function ()
{
  let input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  expect(removeVowelsFromWords(input)).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
