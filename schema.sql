CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    create_ad TIMESTAMP DEFAULT NOW()
);