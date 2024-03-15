# Postgres

## Install and Run using Docker
- `docker pull postgres`

  - To download the latest PostgreSQL image from Docker Hub:

- `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`

  - `--name my-postgres`: Assigns the name “my-postgres” to the container.
  - `-e POSTGRES_PASSWORD=mysecretpassword`: Sets the PostgreSQL superuser password to “mysecretpassword”.
  - `-d`: Runs the container in detached mode (in the background).
  - `-p` 5432:5432: Maps port 5432 on your host machine to port 5432 inside the container (the default PostgreSQL port).

- `docker exec -it my-postgres psql -U postgres`

  - To interact with the container, you can use the `docker exec` command.This command connects you to the PostgreSQL instance running in the container as the “postgres” user

- CTRL + D
- `docker stop my-postgres`
    - To stop the postgres 
- `docker start my-postgres`
    - To start the postgres container
- `docker exec -it my-postgres psql -U postgres`
