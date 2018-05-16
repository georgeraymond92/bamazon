var mysql = require("mysql");
var inquirer = require('inquirer');

var purchaseId = "";
var num_purchased = "";
var stock = "";


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

function purchaseItem() {
  console.log("makeing your purchase\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: num_purchased
      },
      {
        id: purchaseId
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      
    }
  );
  console.log(query.sql);
}

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }


// function setStock(){
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     stock = res[purchaseId-1].stock_quantity;
//   })
// }



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
    
  });

}

inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "what's the product ID?"
    
  },
  {
    type: "input",
    name: "unit",
    message: "How many units would you like to buy?"
  },  
])

.then(function(inquirerResponse){
  // console.log(inquirerResponse.userId);
  // console.log(inquirerResponse.unit);
  purchaseId = inquirerResponse.userId;
  num_purchased = inquirerResponse.unit;   
  purchaseItem();
  readProducts();
  connection.end();
})


