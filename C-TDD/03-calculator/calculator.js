function add(numbers)
{
    if(numbers === "" && numbers.length === 0)
    {
        return 0;
    }

    else if(numbers.length == 1 && parseInt(numbers) <= 1000)
    {
        if(parseInt(numbers) < 0)
        {
            throw new Error("negatives not allowed: ");
        }

        return parseInt(numbers);
    }

    else if(numbers.length >= 2)
    {
        let numArray = numbers.split(",");
        let total = 0;

        for (let i = 0; i < numArray.length; i++)
        {
            if(parseInt(numArray[i]) <= 1000)
            {
                total += parseInt(numArray[i]);
            }
        }

        return total;
    }
}

console.log(add("1,9,6,7"));