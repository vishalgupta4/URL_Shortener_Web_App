# **URL Shortener Web Application**

This is a Node.js web application that allows users to input a long URL and returns a shortened version. The shortened URL can be used to redirect back to the original URL.

## **Features**
- Input a long URL and get a short version.
- Shortened URLs redirect to the original URL.
- An analytics page is used to display all mapped URLs and how many times a shortened URL is clicked.
- URL shortening and redirection are logged in a log file.
- Integrated with MongoDB to store and retrieve URLs.

## **Tech Stack**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **View Engine:** EJS (Embedded JavaScript Templates)

## **Project Structure**
```
├── Controllers │ └── index.js # Handles the URL shortening and redirection logic

├── Middlewares │ └── index.js # Middleware for logging requests and responses

├── Models │ └── url.js # MongoDB model to store URL data

├── Routes │ └── home.js # Handles homepage routing │ └── url.js # Handles URL shortening and redirection routing

├── Views │ └── home.ejs # EJS template for homepage

├── connection.js # MongoDB connection setup

├── index.js # Main server file

├── package.json # Project dependencies

└── README.md # Project documentation
```
#How to start -
- 1 Go to the Directory
- 2 npm start

-If Server is already in use-   
             netstat -ano | findstr :PORT_Num  (will kill the running server)
