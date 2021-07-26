USE employee_system_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Human Resources");
       
INSERT INTO role ( title, salary, department_id)
VALUES ("Sales Manager", 50000, 1),
    ("Sales Intern", 40000, 1),
    ("Full-stack Developer", 100000, 2),
    ("Front-end Developer", 100000, 2),
    ("Recruiter", 60000, 3),
    ("HR Manager", 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Builder", 1, NULL),
("Alice", "Banana", 2, 1);
