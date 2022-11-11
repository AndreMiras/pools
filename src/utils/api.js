const apiRootURL = 'https://pools-api.vercel.app';
const portfolioUrl = (address) => (`${apiRootURL}/portfolio/${address}`);
const tokensDailyUrl = (address) => (`${apiRootURL}/tokens/${address}/daily`);
const pairsDailyUrl = (address) => (`${apiRootURL}/pairs/${address}/daily`);
const pairsUrl = `${apiRootURL}/pairs`;

const fetchFromAPI = (url, onOk, onNotOk) => {
  fetch(url)
    .then((response) => {
      const callback = response.ok ? onOk : onNotOk;
      response.json().then((data) => callback(data));
    },
    // e.g. on unhandled backend 500 exception, the cors header is not passed
    // hence the frontend can't even fetch the response, error would be:
    // TypeError: Failed to fetch
    // TODO: we may want to cross log that to Sentry
    (error) => onNotOk({ detail: error.toString() }));
};

const fetchPortfolio = (address, onOk, onNotOk) => (
  fetchFromAPI(portfolioUrl(address), onOk, onNotOk)
);

const fetchTokensDaily = (address, onOk, onNotOk) => (
  fetchFromAPI(tokensDailyUrl(address), onOk, onNotOk)
);

const fetchPairsDaily = (address, onOk, onNotOk) => (
  fetchFromAPI(pairsDailyUrl(address), onOk, onNotOk)
);

const fetchPairs = (onOk, onNotOk) => (
  fetchFromAPI(pairsUrl, onOk, onNotOk)
);

export {
  portfolioUrl,
  tokensDailyUrl,
  pairsDailyUrl,
  fetchPortfolio,
  fetchTokensDaily,
  fetchPairsDaily,
  fetchPairs,
};
