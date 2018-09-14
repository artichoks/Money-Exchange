// PLEASE DON'T change function name
module.exports = function makeExchange(currency = 51) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const data = [
        {
            coin: 50,
            name: 'H'
        },
        {
            coin: 25,
            name: 'Q'
        },
        {
            coin: 10,
            name: 'D'
        },
        {
            coin: 5,
            name: 'N'
        },
        {
            coin: 1,
            name: 'P'
        },
    ]

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        let exchange = {};
        data.forEach(obj => {
            if (currency / obj.coin >= 1) {
                exchange[obj.name] = Math.floor(currency / obj.coin);
                currency -= obj.coin * (Math.floor(currency / obj.coin));
            }
        });
        return exchange;
    }
}

