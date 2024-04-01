# ToDo App

This is a simple ToDo web application that allows users to add tasks, mark them as completed, and delete them. The application uses HTML, CSS, and JavaScript for the frontend and utilizes localStorage for data persistence.

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Open the `index.html` file in a web browser.

## Building Docker Image and Running a Container

To build the Docker image and run a container using the image, make sure you have Docker installed on your system. Then, follow these steps:

1. Pull the Docker image from Docker Hub using the following command: `docker pull archmike/todo-app`

2. Build the container for the Docker image using the following command: `docker build -t archmike/todo-app`

3. Once the image is built successfully, you can run a container using the following command: `docker run -d -p 8080:80 todo-app`

This command will run a container named `todo-app` in detached mode (-d) and map port 8080 on your host to port 80 on the container.

4. Open a web browser and navigate to `http://localhost:8080` to access the ToDo application running inside the Docker container.

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

1. **Data Persistence**: Data persistence is achieved using localStorage in the browser. This was chosen for simplicity and to avoid the need for a backend database.

2. **Styling**: Basic styling is provided using CSS. Additional styling and design improvements can be made as needed.

3. **Framework/Libraries**: The application was developed using pure HTML, CSS, and JavaScript without the use of any frameworks or libraries to keep it lightweight and simple.

4. **Docker Image**: The Docker image is based on the NGINX Alpine image for serving static files. This was chosen for its lightweight nature and suitability for hosting frontend applications.

5. **Port Mapping**: When running the Docker container, port 8080 on the host is mapped to port 80 on the container. This can be adjusted as needed depending on the host environment.

