sudo docker build -t armory-backend . --no-cache
sudo docker run --env-file .env armory-backend
