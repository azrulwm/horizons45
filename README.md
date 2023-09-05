Documentation: Running the Application Locally
Prerequisites
Before running the application, ensure you have the following installed on your machine:

- Docker

Steps to Run the Application

1. Pull the Docker Image from Docker Hub:

docker pull azrulwm/horizons45

2. Run the Docker Container:

Run the container using the image you've just pulled. Replace placeholders with your specific details.

docker run -d -p 3000:3000 azrulwm/horizons45

In this example, we're mapping port 3000 in the container to port 3000 on the host. Adjust as necessary if you're using a different port.

docker run -d -p <your_port>:3000 azrulwm/horizons45

3. Access the Application:

Open your favorite browser and navigate to http://localhost:3000 to access the application.

Stopping the Container:

If you wish to stop the running container, you first need to get its container ID:

docker ps

Identify the container ID from the list and then stop it:

docker stop <container_id>
