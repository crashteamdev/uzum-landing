FROM nginx:1.21
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
