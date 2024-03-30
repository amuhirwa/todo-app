FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# dckr_pat_P4E9vMr03UJEPEZCOAK8zq-BQNE