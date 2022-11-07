function sales(carsSold)
{
    let salesObject = {};

    /*CREATE*/
    carsSold.forEach(car =>
    {
        if(car.make !== salesObject[car.make])
        {
            salesObject[car.make] = 0;
        }
    });

    /*UPDATE*/
    carsSold.forEach(car => 
    {
        salesObject[car.make] += car.price;
    });

    return salesObject;
}

module.exports = sales;
