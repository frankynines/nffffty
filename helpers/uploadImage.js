  
const fleek = require('@fleekhq/fleek-storage-js');  

const axios = require('axios');
const FormData = require('form-data');



export const pinFileToIPFS = (image, params) => {
  

  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  const data = new FormData();
  data.append('file', image);

  const metadata = JSON.stringify({
      name: params.name,
      keyvalues: params
  });
  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
      cidVersion: 0,
      customPinPolicy: {
          regions: [
              {
                  id: 'FRA1',
                  desiredReplicationCount: 1
              },
              {
                  id: 'NYC1',
                  desiredReplicationCount: 2
              }
          ]
      }
  });
  data.append('pinataOptions', pinataOptions);

  return axios.post(url, data,
      {
          maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
          headers: {
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
              'pinata_api_key': process.env.PINATAKEY,
              'pinata_secret_api_key': process.env.PINATASECRET
          }
      }
  ).then(function (response) {
      //handle response here
      console.log(response);
  }).catch(function (error) {
      console.log(error);
  });

};

export const listPins = () => 
new Promise(function (result) {
  console.log("List Pins");
    const url = `https://api.pinata.cloud/data/pinList`;
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

//....//

export const uploadImage = async (data) => {
  const date = new Date();
  const timestamp = date.getTime();

  const input = {
    apiKey,
    apiSecret,
    key: `file-${timestamp}`,
    data,
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

export const listBuckets = async () => {
    const input = {
      apiKey,
      apiSecret,
    };
  
    try {
      const result = await fleek.listBuckets(input);
      console.log(result);
    } catch(e) {
      console.log('error', e);
    }
  }

export const listFiles = async () => {
    const input = {
      apiKey,
      apiSecret,
      getOptions: [
        'bucket',
        'key',
        'hash',
        'publicUrl'
      ],
    };
  
    try {
      const result = await fleek.listFiles(input);
      console.log(result);
    } catch(e) {
      console.log('error', e);
    }
  }

  const functionget = async () => {
    const input = {
      apiKey,
      apiSecret,
      key,
      getOptions: ['hash', 'data', 'publicUrl']
    };
  
    try {
      const result = await fleek.get(input);
      console.log(result);
    } catch(e) {
      console.log('error', e);
    }
  }
  