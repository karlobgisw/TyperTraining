//importamos modulo mysql para la conexion con la bd
let mysql = require('mysql');

//Creamos la conexion como el metodo y ponemos las propiedades de la conexion
let conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

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