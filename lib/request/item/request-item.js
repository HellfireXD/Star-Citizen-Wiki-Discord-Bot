const axios = require('../request');
const {locale} = require('../../../config.json');
const requestImage = require('../request-image');

const requestData = async (name) => {
  const apiData = await axios.get(`items/${encodeURIComponent(name.toLowerCase())}`, {
    params: {
      include: 'shops.items',
      locale,
    },
  })
    .catch((error) => error);

  if (apiData.status !== 200) {
    throw apiData;
  }

  const result = apiData.data;

  const image = await requestImage(result.data.name);

  return {
    result: result.data,
    image,
  };
};

module.exports = requestData;
