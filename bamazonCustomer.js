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
  console.log("Connected as ID " + connection.threadId);
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

    connection.query(query, answer.id, function(err, res) {
      if (err) return console.log(err);

      for (var i=0; i < res.length; i++) {
        if (res[i].stock_quantity < answer.quantity) {
          console.log("Insufficient quantity!");
          connection.end();
        }
        else {
          var newQuantity = res[i].stock_quantity - answer.quantity;
          var purchaseTotal = res[i].price * answer.quantity;
          // console.log(res);
          console.log("Product ID: %s" ,res[i].item_id);
          console.log("Product: %s", res[i].product_name);
          console.log("Quantity: %s", answer.quantity);
          console.log("Price: %s", res[i].price);
          console.log("Total: %s", purchaseTotal);

          connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: newQuantity}, {item_id: res[i].item_id}], function(error) {
            if (error) throw error;
            console.log("New stock_quantity: %s", newQuantity);
          });

          connection.end();          
        }
      }
      
    });
    
  });
  
};

shopBamazon();

});
