# Build Docker Image for Node Server
sudo docker build . -t node-web-server

# Run Docker Image
sudo docker run -p 8000:8000 node-web-server:latest