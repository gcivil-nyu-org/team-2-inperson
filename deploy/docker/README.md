# Docker Build instructions

## Out-of-tree build - Backend
Docker requires you to build images with the source files fully contained within the directories rooted at where the build was executed from.  When developing for the backend api on a local machine, copy this directory (deploy/docker/*) and its contents to a separate out-of-tree directory, and place a symlink inside of ./root/app/... that points to the src/backend/ directory within the original repository.

## `.env` file
Copy the example.env file, and rename it to be `.env`.  Fill in the necessary AWS details for the container registry and the repository this build is going to reside within

## Dockerfile changes
Change the environment variable `SHORTLIST_APP_NAME` inside of `Dockerfile` to be the name of the wsgi app (this should be the FOLDER name of ./root/app/SHORTLIST_APP_NAME, as well as the name of the django project folder in the directory next to `manage.py`)

## Design Decisions: Sidecar pattern
This container runs the following components:
1. Nginx - reverse proxy. This accepts http traffic on port 80 and forwards internally to port 8080 (where an WSGI app is expected to be listening).  This allows us to ignore "allowed_hosts" for machines that may move around quite frequently.
2. Health check - /health. This container automatically responds to health checks initiated by AWS.  
3. Monitoring - TBD.  When monitoring is designed, this container will also contain the logging tools required to send telemetry data about the container (as well as from the shortlist code itself)
4. App - /app/*****. The wsgi app is automatically run with gunicorn as the wsgi host