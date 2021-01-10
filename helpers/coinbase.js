const axios = require('axios');

export const getETHPrice = () => {
    console.log("Get ETH Price")
    return axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/'
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
  
};
