FROM php:7-apache

COPY . /var/www/html

#Port for External
#EXPOSE 9090

#WORKDIR
WORKDIR /var/www/

