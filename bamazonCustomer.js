let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port:  3306,
    user: "root",
    password: "1027985.Gg@",
    database: "bamazon"
});

connection.connect(function(err){ 
    if(err) throw err;
    console.log(`**** Successfully connected to Bamazon inventory as ID ${connection.threadId} *****`);
    displayInventory();
});

function displayInventory(){
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if(err) throw err;
        console.log()
        for(let i = 0; i < res.length; i++){
            console.log(
            ``
            )
        }
        console.log(res);
        connection.end();
    });
};

