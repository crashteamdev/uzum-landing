FROM nginx:1.21
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/vhosts.d/checkout.conf
