const axios = require('axios');
const FormData = require('form-data');

export const listPins = (id) => 
    new Promise(function (result) {
    const url = `https://api.pinata.cloud/data/pinList?hashContains=${id}`;
    return axios
        .get(url, {
            headers: {
              'pinata_api_key': process.env.PINATAKEY,
              'pinata_secret_api_key': process.env.PINATASECRET
            }
        })
        .then(function (response) {
          result({error: null, response: response});
          return;
        })
        .catch(function (error) {
            result({error: error, response: null});
            return;
        });
});

export const listPinnedPins = () => 
new Promise(function (result) {
  console.log("List Pins");
    const url = `https://api.pinata.cloud/data/pinList?status=pinned`;
    return axios
        .get(url, {
            headers: {
              'pinata_api_key': process.env.PINATAKEY,
              'pinata_secret_api_key': process.env.PINATASECRET
            }
        })
        .then(function (response) {
          result({error: null, response: response});
          return;
        })
        .catch(function (error) {
            result({error: error, response: null});
            return;
        });
});

export const removePinFromIPFS = (hashToUnpin) => 
  new Promise(function (result) {

  const url = `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`;
  return axios
      .delete(
          url,
          {
              headers: {
                'pinata_api_key': process.env.PINATAKEY,
                'pinata_secret_api_key': process.env.PINATASECRET
              }
        })
      .then(function (response) {
        result({error: null, response: response});
        return;
      })
      .catch(function (error) {
          result({error: error, response: null});
          return;
      });
});