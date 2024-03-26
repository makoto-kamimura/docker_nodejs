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
yarn add react-beautiful-dnd
yarn start
```

```
docker exec -it docker_nodejs-app-1 sh
cd react-project/trello-clone
yarn start
```
http://localhost:3000/

##
yarn add react@18.2.0 react-dom@18.2.0
// <React.StrictMode>
yarn add --dev @babel/plugin-proposal-private-property-in-object
yarn add uuid

## image
https://o-dan.net/ja/

## font
https://fontawesome.com/

## uuid
https://www.npmjs.com/package/uuid