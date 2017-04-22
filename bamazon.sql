CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,3),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acer Laptop", "Electronics", 429.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snowboard", "Recreational", 585.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sandals", "Clothing", 9.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Home Appliances", 15.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rain Jacket", "Clothing", 89.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Recreational", 49.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Digital Watch", "Accessories", 99.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Monitor", "Electronics", 129.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Home Appliances", 39.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Armchair", "Furnishing", 129.99, 2);

SELECT * FROM products;