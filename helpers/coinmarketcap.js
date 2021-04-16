const axios = require('axios');

export const getETHPrice = () => 
    new Promise(function (result) {

    console.log("Get ETH Price")
    return axios.get('https://coingecko.com/api/documentations/v3',
    // {
    //     headers: {
    //         'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP
    //     }}
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log("ERROR", error);
    });
  
});
