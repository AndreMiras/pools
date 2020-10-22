const apiURL = 'https://pools-api.herokuapp.com/portfolio/';

const getPortfolioUrl = (address) => (
  apiURL + address
);

const fetchPortfolio = (address, onOk, onNotOk) => {
  const url = getPortfolioUrl(address);
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

export { getPortfolioUrl, fetchPortfolio };
