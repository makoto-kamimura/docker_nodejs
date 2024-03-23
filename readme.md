# 
node v20.11.1
npm 10.2.4
npx 10.2.4

```
<!-- docker build . -t docker_nodejs -->
docker-compose up -d 
docker-compose down
```

```
docker exec -it docker_nodejs-app-1 sh
npm install yean
mkdir react-project
cd react-project
npx create-react-app trello-clone
cd trello-clone
yarn start
```