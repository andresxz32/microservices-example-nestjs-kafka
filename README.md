## 🤘🤘🤘🤘🤘 Microservices example using nestjs by  Andrés Felipe Ospina Sepúlveda 🤘🤘🤘🤘🤘

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.
Dillinger required [Docker](https://www.docker.com/).
Dillinger required [Docker Compose](https://docs.docker.com/compose/).
Dillinger required [Mongodb](https://www.mongodb.com/).
Dillinger required [Mysql](https://www.mysql.com/).
Clone repository [Kafkdrop](https://github.com/obsidiandynamics/kafdrop) 
Install the dependencies and devDependencies and start the server.

## For running kafka broker
```sh
https://github.com/obsidiandynamics/kafdrop.git
cd /kafdrop/docker-compose/kafka-kafdrop
docker-compose up
```

## For running Api gateway
```sh
cd /api-gateway
npm i
nest start --watch
```

## For running User microservice
```sh
cd /user-microservice
npm i
nest start --watch
```

## For running Video microservice
```sh
cd /video-microservice
npm i
nest start --watch
```

