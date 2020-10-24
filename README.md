# Pools

[![Tests](https://github.com/AndreMiras/pools/workflows/Tests/badge.svg?branch=develop)](https://github.com/AndreMiras/pools/actions?query=workflow%3ATests)
[![Deploy](https://github.com/AndreMiras/pools/workflows/Deploy/badge.svg?branch=develop)](https://github.com/AndreMiras/pools/actions?query=workflow%3ADeploy)

The Uniswap liquidity provider dashboard: <https://andremiras.github.io/pools/>

Built on top of the Pools API: <https://github.com/AndreMiras/pools-api>

<img src="https://i.imgur.com/lka0oGg.png" alt="Screenshot">

## Disclaimer
Early stage and only supports Uniswap for now.

## Run
```sh
make start
```

## Test
```sh
make lint
make test
```

## Deployment
The app can be deployed on GitHub pages when releasing via:
```sh
make deploy
```
