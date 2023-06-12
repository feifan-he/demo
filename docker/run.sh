

docker rm $(docker ps -a -q --filter "status=exited")
docker rmi $(docker images -q)

docker build -t test-proj .
docker run  --mount type=bind,src=$(pwd)/bind_path,target=/app/my_folder test-proj

# docker run  --mount type=volume,src=volume_path,target=/app/my_folder test-proj