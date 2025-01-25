FROM php:8.2-apache

WORKDIR /var/www/html

COPY . .

EXPOSE 80

RUN a2enmod rewrite && \
    chown -R www-data:www-data /var/www/html

CMD ["apache2-foreground"]

