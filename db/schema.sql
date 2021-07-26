DROP DATABASE IF EXISTS employee_system_db;
CREATE DATABASE employee_system_db;
USE employee_system_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE 

);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
)