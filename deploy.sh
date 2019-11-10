cp ~/env/db.env .
cp ~/env/.env .
sudo docker build -t armory-backend . --no-cache
sudo docker run --env-file .env -p 8090:8090 armory-backend
