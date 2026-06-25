FROM php:7-fpm-alpine

RUN apk add --no-cache sqlite nginx \
    && apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
    && docker-php-ext-install opcache \
    && docker-php-ext-enable opcache \
    && apk del .build-deps \
    && echo 'opcache.validate_timestamps=0' > /usr/local/etc/php/conf.d/opcache-prod.ini

COPY docker/app/nginx.conf /etc/nginx/nginx.conf

COPY --chmod=755 docker/app/entrypoint.sh /entrypoint.sh

COPY assets/db/ /db/
COPY build/ /var/www/html/
RUN mkdir -p /var/www/html/database \
    && chown -R www-data:www-data /var/www/html/database

ENTRYPOINT ["/entrypoint.sh"]
CMD ["start"]


