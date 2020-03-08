DROP DATABASE IF EXISTS enter_ly;
CREATE DATABASE enter_ly;
USE enter_ly; 

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);