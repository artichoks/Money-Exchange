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



    // if (currency <= 0) {
    //     return {};
    // } else if (currency > 10000) {
    //     return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    // } else {
    //     let exchange = {};
    //     if (currency / 50 >= 1) {
    //         exchange["H"] = Math.floor(currency / 50);
    //         currency = currency - 50 * (Math.floor(currency / 50));
    //     }
    //     if (currency / 25 >= 1) {
    //         exchange["Q"] = Math.floor(currency / 25);
    //         currency = currency - 25 * (Math.floor(currency / 25));
    //     }
    //     if (currency / 10 >= 1) {
    //         exchange["D"] = Math.floor(currency / 10);
    //         currency = currency - 10 * (Math.floor(currency / 10));
    //     }
    //     if (currency / 5 >= 1) {
    //         exchange["N"] = Math.floor(currency / 5);
    //         currency = currency - 5 * (Math.floor(currency / 5));
    //     }
    //     if (currency) {
    //         exchange["P"] = currency;
    //     }

    //     return exchange;
    // }
}

