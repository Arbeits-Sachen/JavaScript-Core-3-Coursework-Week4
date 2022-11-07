function convertToOldRoman(n)
{
    let roman =
    {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    let str = "";
    
    for (let i of Object.keys(roman))
    {
        let q = Math.floor(n / roman[i]);
        n -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

module.exports = convertToOldRoman;
