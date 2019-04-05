#!/usr/bin/make -f

IMAGE_NAME=mouworks_m1ga:1.0.0

CONTAINER_NAME=mouworksM1GA

all: build run

build:
	@echo ">>> Build Docker Image"
	docker build -t ${IMAGE_NAME} .

run:
	@echo ">>> Run the Env"
	docker run --name ${CONTAINER_NAME} -t -d -p 9090:80 ${IMAGE_NAME}

stop:
	@echo ">>> Stop the image"
	docker rm -f ${CONTAINER_NAME}

destroy:
	@echo ">>> Destory the image"
	docker