var mysql = require("mysql");
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Smokethedog1992!!",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts()
  });

  function readProducts() {
    console.log("here is a list of product that we have for sale...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
    //   console.log(res);
      for (i = 0; i<res.length;i++){
        console.log("\nItem ID#: " + res[i].id);
        console.log("Product: " + res[i].product_name);
        console.log("Product Department: " + res[i].department_name);
        console.log("Price: $" + res[i].price);
        console.log("Units In Stock: " + res[i].stock_quantity);
      }
      
      connection.end();
    });

}
