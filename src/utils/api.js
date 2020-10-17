const apiURL = 'https://uniswaproi.herokuapp.com/portfolio/';

const getPortfolioUrl = (address) => (
  apiURL + address
);

const fetchPortfolio = (address, onFetch, onError) => {
  const url = getPortfolioUrl(address);
  fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        onFetch(result);
      },
      (error) => {
        onError(error);
      },
    );
};

export { getPortfolioUrl, fetchPortfolio };
