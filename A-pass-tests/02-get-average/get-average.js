// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers)
{
    total = 0;
    repeat = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        if(Number.isInteger(numbers[i]))
        {
            total += numbers[i];
            repeat++;
        }
    }

    return total = total / repeat;
}

module.exports = average;
