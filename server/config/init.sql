CREATE DATABASE IF NOT EXISTS hotel;

USE hotel;

CREATE TABLE IF NOT EXISTS country (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS city (
  id INT AUTO_INCREMENT PRIMARY KEY,
  country_code INT,
  name VARCHAR(100) NOT NULL,
  FOREIGN KEY (country_code) REFERENCES country(id)
);

CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS hotel (
  id VARCHAR(8) PRIMARY KEY, 
  name VARCHAR(100) NOT NULL,
  city_code INT NOT NULL,
  country_code INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (country_code) REFERENCES country(id),
  FOREIGN KEY (city_code) REFERENCES city(id)
);

INSERT INTO country (name) VALUES ('Australia');
INSERT INTO country (name) VALUES ('United States');
INSERT INTO country (name) VALUES ('India');
INSERT INTO country (name) VALUES ('China');
INSERT INTO country (name) VALUES ('Germany');
INSERT INTO country (name) VALUES ('Japan');

INSERT INTO city (name, country_code) VALUES ('Canberra', 1);
INSERT INTO city (name, country_code) VALUES ('Melbourne', 1);
INSERT INTO city (name, country_code) VALUES ('Sydney', 1);
INSERT INTO city (name, country_code) VALUES ('Perth', 1);

INSERT INTO city (name, country_code) VALUES ('Seattle', 2);
INSERT INTO city (name, country_code) VALUES ('Colorado', 2);
INSERT INTO city (name, country_code) VALUES ('Florida', 2);
INSERT INTO city (name, country_code) VALUES ('Denver', 2);
INSERT INTO city (name, country_code) VALUES ('Las Vegas', 2);

INSERT INTO city (name, country_code) VALUES ('Delhi', 3);
INSERT INTO city (name, country_code) VALUES ('Mumbai', 3);
INSERT INTO city (name, country_code) VALUES ('Kolkata', 3);
INSERT INTO city (name, country_code) VALUES ('Bengaluru', 3);
INSERT INTO city (name, country_code) VALUES ('Chennai', 3);
INSERT INTO city (name, country_code) VALUES ('Ahmedabad', 3);
INSERT INTO city (name, country_code) VALUES ('Lucknow', 3);

INSERT INTO city (name, country_code) VALUES ('Beijing', 4); 
INSERT INTO city (name, country_code) VALUES ('Shanghai', 4);
INSERT INTO city (name, country_code) VALUES ('Tianjin', 4);
INSERT INTO city (name, country_code) VALUES ('Guangzhou', 4);
INSERT INTO city (name, country_code) VALUES ('Shenzhen', 4);

INSERT INTO city (name, country_code) VALUES ('Berlin', 5);
INSERT INTO city (name, country_code) VALUES ('Munich', 5);
INSERT INTO city (name, country_code) VALUES ('Hamburg', 5);
INSERT INTO city (name, country_code) VALUES ('Cologne', 5);
INSERT INTO city (name, country_code) VALUES ('Bochum', 5);
INSERT INTO city (name, country_code) VALUES ('Braunschweig', 5);

INSERT INTO city (name, country_code) VALUES ('Tokyo', 6);
INSERT INTO city (name, country_code) VALUES ('Kyoto', 6);
INSERT INTO city (name, country_code) VALUES ('Osaka', 6);
INSERT INTO city (name, country_code) VALUES ('Yokohoma', 6);
INSERT INTO city (name, country_code) VALUES ('Hiroshima', 6);
INSERT INTO city (name, country_code) VALUES ('Nagoya', 6);
INSERT INTO city (name, country_code) VALUES ('Sendai', 6);

INSERT IGNORE INTO hotel (id, name, city_code, country_code) VALUES ('EL001', 'Taj', 3, 3);
