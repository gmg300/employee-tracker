const chalk = require("chalk");

class Employees {
  constructor(connection) {
    this.connection = connection;
  }
  addRole(title, salary, dept_id) {
    this.connection.query(
      'INSERT INTO roles (title, salary, dept_id) VALUES (?, ?, ?)',
      [title, salary, dept_id],
      function(err, res) {
        if (err) throw err;
        console.log(chalk.green(`"${title}" added to roles`));
      });
  }
  viewRoles() {
    this.connection.query(
      `SELECT * FROM roles`,
      function(err, res) {
        if(err) throw err;
        console.log(chalk.green("--- Roles ---"));
        console.table(res);
      });
  }
  updateEmployeeRole() {}
  updateEmployeeManager() {}
  deleteRole(role_id) {
    this.connection.query(
      'DELETE FROM roles WHERE role_id = ?',
      role_id,
      function(err, res) {
        if(err) throw err;
        console.log(chalk.green(`Role #${role_id} deleted`));
      });
  }
}

function callback(err, res) {
  if (err) {
    console.log(chalk.red("Error!"));
    console.log(chalk.red(err));
  } else {
    console.log(chalk.cyan(res));
    console.log(chalk.cyan("Query successful."));
  }
}

module.exports = {
  Employees,
};
