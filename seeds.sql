CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT(15) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INT(15) NULL,
stock_quantity INT(10) NOT NULL
)

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("bannana" , "food" , 2 , 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("coffee" , "food" , 15 , 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("adidas" , "shoes" , 150 , 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("hoodie" , "clothes" , 35 , 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("t-shirt" , "clothes" , 10 , 75);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("watch" , "accessories" , 200 , 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("necklace" , "accessories" , 50 , 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("ipad" , "tech" , 400 , 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("laptop" , "tech" , 1400 , 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("nike" , "shoes" , 145 , 50);
