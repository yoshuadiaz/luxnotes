# WIP | Luxelare Notes

This project manage notes by entity to a Covid-19 Dashboard

## How to install

* First install the dependencies
  ```bash
    npm install
  ```
* Next, you need to create a DB.
* Duplicate and rename the .env_example to .env, and add your env variables.
* Run the migrations
  ```bash
    npm run migrations:run
  ```

## How to run

You can run directly or with docker-compose

```bash
  npm start

  or

  docker-compose up -d
```

If you need to run some command in the docker container you need to run

```bash
  docker exec -it <container_name> sh
```

## API Docs

Check docs [here!](https://documenter.getpostman.com/view/1023966/SztA7UB2?version=latest)

## Stack
- Node.JS
- PostgreSQL
- Express.JS
- Sequelize
- Multer
- flydrive