//importamos modulo mysql para la conexion con la bd
let mysql = require('mysql');

//Creamos la conexion como el metodo y ponemos las propiedades de la conexion
let conexion = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "TyperTraining",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD ||"root123",
    port: process.env.DB_PORT || 3306
});
console.log(process.env.DB_HOST);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);
//Conectamos la bd y mostramos un mensaje en caso de que haya sido exitosa o en caso de que no, tiramos el error de la conexion
conexion.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Conexion exitosa con la bd mi puto perro");
    }
});

//Exportamos la conexion para usarla en app y empezar a hacer operaciones
module.exports.conexion = conexion;