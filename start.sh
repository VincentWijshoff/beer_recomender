export BEER_HOST=$(hostname -I | awk '{print $1}')
docker-compose up -d --build