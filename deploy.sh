cp ~/env/db.env .
cp ~/env/.env .
sudo docker build -t armory-backend . --no-cache
sudo docker run --network="host" --env-file .env -p 8090:8090 armory-backend
