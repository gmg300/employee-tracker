const chalk = require("chalk");

class Employees {
  constructor(connection) {
    this.connection = connection;
  }
  addEmployee(first_name, last_name, role_id, manager_id) {
    this.connection.query(
      'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [first_name, last_name, role_id, manager_id],
      function(err, res) {
        if (err) throw err;
        console.log(chalk.green(`"${first_name} ${last_name}" added to employees`));
      });
  }
  viewEmployees() {
    this.connection.query(
      `SELECT * FROM employees`,
      function(err, res) {
        if(err) throw err;
        console.log(chalk.green("--- Employees ---"));
        console.table(res);
      });
  }
  updateEmployeeRole() {}
  updateEmployeeManager() {}
  deleteEmployee(employee_id) {
    this.connection.query(
      'DELETE FROM employees WHERE employee_id = ?',
      employee_id,
      function(err, res) {
        if(err) throw err;
        console.log(chalk.green(`Employee #${employee_id} deleted`));
      });
  }
}

module.exports = {
  Employees,
};
