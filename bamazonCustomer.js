// Loading mysql node package
var mysql = require('mysql');

// Loading inquirer node package
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "tcbtran",
  password: "My$QL_Homework12",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});

connection.query('SELECT * FROM products', function(error, results, fields) {
  if (error) throw error;
  console.log("Welcome to Bamazon! Your one stop shop!");
  console.log("Here are today's gots to go deals: ")
  console.log("ID |" + " Product " + " | Price" + " | Quantity");
  for (var i=0; i < results.length; i++) {
    console.log(results[i].item_id + "  | " + results[i].product_name + " | " + results[i].price + " | " + results[i].stock_quantity);
  }

var shopBamazon = function() {

  inquirer.prompt([
    {
    name: "id",
    message: "What is the ID number of the product you want to purchase?"
    },
    {
    name: "quantity",
    message: "How many do want?"
    }
]).then(function(answer) {
    
    var query = "SELECT * FROM products WHERE item_id = ?";
    // console.log('answer:', answer);
    connection.query(query, answer.id, function(err, res) {
      if (err) return console.log(err);
      console.log(res);
      console.log(typeof(res[0].item_id));
      // else if (res.stock_quantity < answer.quantity) {
      //   console.log("Sorry, we do not have enough " + res.product_name + " in stock.");
      //   connection.end();
      //   }
       {
        // var newQuantity = parseInt(res.stock_quantity) - parseInt(answer.quantity);
        // connection.query('UPDATE products SET ? WHERE ?', [{stock_quantity: newQuantity}, {item_id: parseInt(answer.id)}], function(err) {
        //   if (err) throw err;
        //   console.log("Your order has been placed.  Thank you.");
          connection.end();
          // });
        }
      
      });
    
    });
  // connection.end();
  };

shopBamazon();

});










