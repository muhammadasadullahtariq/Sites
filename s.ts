server {
    listen 80;
    server_name evconnect.linkapp.one;

    root /var/www/Sites;

    index ev.html;

    location / {
        try_files $uri $uri/ =404;
    }
}