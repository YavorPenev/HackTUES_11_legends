CREATE DATABASE yourdatabase;
USE yourdatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE article_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50)  NOT NULL,
    article_text TEXT NOT NULL
);