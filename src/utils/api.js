const apiURL = 'https://uniswaproi.herokuapp.com/portfolio/';

const getPortfolioUrl = (address) => (
  apiURL + address
);

const fetchPortfolio = (address, onOk, onNotOk) => {
  const url = getPortfolioUrl(address);
  fetch(url)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => onOk(data));
      } else {
        response.json().then((data) => onNotOk(data));
      }
    });
};

export { getPortfolioUrl, fetchPortfolio };
