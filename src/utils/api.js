const apiURL = 'https://uniswaproi.herokuapp.com/portfolio/';

const getPortfolioUrl = (address) => (
  apiURL + address
);

const fetchPortfolio = (address, onOk, onNotOk) => {
  const url = getPortfolioUrl(address);
  fetch(url)
    .then((response) => {
      const callback = response.ok ? onOk : onNotOk;
      response.json().then((data) => callback(data));
    });
};

export { getPortfolioUrl, fetchPortfolio };
