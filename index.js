//requiremysql2 andinquirer 
const inquirer = require("inquirer");
const mysql2 = require("mysql2");
//installthem


// Connect to database
const db = mysql2.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employee_system_db'
    },
    console.log(`Connected to the employee_system_db database.`)
);

//ask questions
function init() {
    console.log("Building Employee Profile.......");
    inquirer.prompt([
        //view departments
        {
            type: "list",
            name: "userInput",
            message: "What would you like to do ?",
            choices: ["View all Department",
                "Add Department", "View all Roles",
                "Add Role", "View all Employees",
                "Add Employee", "Update Employee Role", "Exit"]
        },


    ]).then(response => {
        console.log(response.userInput);
        if (response.userInput === "View all Department") {
            viewDepart();

        } else if (response.userInput === "Add Department") {
            addDept();
        } else if (response.userInput === "View all Roles") {
            viewRoles();
        } else if (response.userInput === "Add Role") {
            addRole();
        } else if (response.userInput === "View all Employees") {
            viewEmployees();
        } else if (response.userInput === "Add Employee") {
            addEmployee();
        } else {
            console.log("Goodbye!!");
            process.exit();
        }
    })
}


//based on the ans db.query("Select or INSERT  or  DELETE")

init();

function viewDepart() {
    console.log("getting departments from database ... ");
    //Query database
    db.query(`SELECT * FROM department`, function (err, results) {
        console.table(results);

        //ask the question again 
        init();
    });
}

function viewRoles() {
    console.log("getting roles from database ... ");

    //tablename.columnname 
    const sqlQuery = `SELECT role.id,  role.title,role.salary,  department.name AS 'Department' 
    FROM role JOIN department 
    ON department.id = role.department_id`;
    //Query database
    db.query(sqlQuery, function (err, results) {
        console.table(results);

        //ask the question again 

        init();
    });
}

function viewEmployees() {
    console.log("getting employees from database ... ");
    //Query database
    db.query(`SELECT * FROM employee`, function (err, results) {
        console.table(results);

        //ask the question again 
        init();
    });
}

function addDept() {

    console.log("Adding data to department table ");
    inquirer.prompt(
        {
            type: "input",
            name: "addDepartments",
            message: "What department would you like to add?"
        }
    ).then(response => {
        const sql = `INSERT INTO department (name)  VALUES (?)`;
        db.query(sql, response.addDepartments, (err, result) => {
            if (err) { console.log(err) }
            else {
                console.log("Added a new department succesfully ");

                //ask question 
                init();
            }
        })
    })
}
function addRole() {

    console.log("Adding data to roles table ");
    inquirer.prompt(
        {
            type: "input",
            name: "addRole",
            message: "What role would you like to add?"
        }
    ).then(response => {
        const sql = `INSERT INTO role (name)  VALUES (?)`;
        db.query(sql, response.addRole, (err, result) => {
            if (err) { console.log(err) }
            else {
                console.log("Added a new role succesfully ");

                //ask question 
                init();
            }
        })
    })
}

function addEmployee() {

    console.log("Adding data to employee table ");
    inquirer.prompt(
        {
            type: "input",
            name: "addEmployee",
            message: "What is the first name of your employee?"
        }
    ).then(response => {
        const sql = `INSERT INTO employee (first_name)  VALUES (?)`;
        db.query(sql, response.addEmployee, (err, result) => {
            if (err) { console.log(err) }
            else {
                console.log("Added a new employee succesfully ");

                //ask question 
                init();
            }
        })
    })
}
/*
function updateEmployees(){
    console.log("Updating employee table");
    inquirer.prompt(
        {
            
        }
    )
}
*/

/*
 {
            type: "input",
            name: "addDepartments",
            message: "What department would you like to add?"
        },
        {
            type: "list",
            name: "viewRoles",
            message: "View all roles",
            choices: ["Sales", "Engineering", "Human Resources"]
        },
        {
            type: "input",
            name: "addRoles",
            message: "What role would you like to add?",

        },
        {
            type: "input",
            name: "addRolesSalary",
            message: "What is the salary of the role?",

        },
        {
            type: "input",
            name: "addRolesDepartment",
            message: "What is the department of the role?"
        },
        {
            type: "list",
            name: "viewEmployees",
            message: "View all employees",
            choices: ["Bob Builder", "Alice Banana"]
        },
        {
            type: "list",
            name: "updateEmployees",
            message: "Which employee profile would you like to update?",
            choices: ["Sales", "Engineering", "Human Resources"]
        },
        {
            type: "input",
            name: "addEmployeesFirst",
            message: "What is the employees first name?",

        },
        {
            type: "input",
            name: "addEmployeesLast",

            message: "What is the employees last name?",

        },
        {
            type: "input",
            name: "addEmployeesRoles",

            message: "What is the employees role?",

        },
        {
            type: "input",
            name: "addEmployeesManager",

            message: "What is the manager's name?",
        },
*/