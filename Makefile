DOCKER_IMAGE=andremiras/uniswap-roi
DOCKER_COMMAND ?= /bin/bash

all: install

install:
	yarn install

clean:
	rm -rf node_modules/

test: install
	yarn test --watchAll=false

start: install
	yarn start

lint: install
	yarn lint

format: install
	yarn format

intl: install
	yarn intl

deploy: install
	yarn deploy

docker/build:
	docker build --tag=$(DOCKER_IMAGE) .

docker/shell:
	docker run --rm -it $(DOCKER_IMAGE) $(DOCKER_COMMAND)

docker/run:
	docker run --rm -it --publish 8000:80 $(DOCKER_IMAGE)
