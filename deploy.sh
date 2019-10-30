sudo docker build -t armory-backend . --no-cache
sudo docker run --env-file .env -p 80:8090 armory-backend
