//Importamos express que es framework de node
const express = require("express");
const app = express();

//Importacion para validaciones
const {body, validationResult} = require('express-validator');

//Variables de entorno
const dotenv = require('dotenv');
dotenv.config();

//Hasheo de las contraseñas
const bycriptjs = require('bcryptjs');

//importamos path que nos ayuda a saber las ubicaciones de los archivos en el sistema
const path = require("path");

//Configuracion de los archivos estaticos
app.use(express.static('public'));

//Sesiones
const session = require('express-session');

app.use(session({
    secret: 'o-OuKE$7@N75jvz7ti3Og:D:xkuG{6l;',
    resave: true,
    saveUninitialized: true
}));


//Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));


const {conexion} = require('./conexion_bd.js'); //Sintaxis de desustructuracion

app.use(express.urlencoded({extended : false})); //Instruccion para manejar los datos del formulario como objetos de JS
app.use(express.json());// Lo mismo pero para JSON


//ROUTING

//pagina-inicial//
app.get("/", (req,res) =>{
    let user_id = req.session.user_id;
    if (!(user_id == undefined)){
        res.redirect('/inicio');
    }
    else{
        res.render('login');
    }
});

//pagina-de-login
app.get("/registro", (req,res) =>{
    let user_id = req.session.user_id;
    if (!(user_id == undefined)){
        res.redirect('/inicio');
    }
    else{
        res.render('registro');
    }
});

//pagina-principal
app.get("/inicio", (req,res) =>{
    let user_id = req.session.user_id;
    if (user_id == undefined){
        res.redirect('/');
    }
    else{
        conexion.query('SELECT ppm_record FROM usuarios WHERE id = ?', [user_id], async(error, results) =>{
            if(error){
                console.log("error mijo");
                res.send(error);
            }
            else{
                req.session.ppm = results[0];
                let ppm = req.session.ppm;
                ppm = ppm.ppm_record;
                res.render('index', {ppm, user_id});
            }
        });
    }
});

//registro-de-usuario
app.post("/registro", [
    //VALIDACIONES
    body('username') //Validacion nombre de usuario
        .exists() //Que no este vacio
        .withMessage('Ingresa una username')
        .isLength({min: 8})
        .withMessage('El username debe tener al menos 8 caracteres'),
        
    body('email') //Validacion del email
        .exists() //Que no este vacio
        .withMessage('Ingresa un email')
        .isEmail() //Que cumpla formato de email
        .withMessage('Ingresa un email valido'),
    
    body('password', 'Contraseña invalida') //Validacion de contraseña
        .exists()
        .withMessage('Ingresa una contraseña')
        .isLength({min:8})
        .withMessage('La contraseña debe tener minimo 8 caracteres')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/) //Debe contener letras numeros y simbolos
        .withMessage('La contraseña debe de contener almenos una minuscula, una mayuscula, un numero y un simbolo'),

    body('passwordConfirm') //Confirmacion de contraseña
        .custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Las contraseñas deben coincidir');
          }
          return true;
    })

], async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const valores = req.body;
        const Validaciones = errors.array();
        console.log(Validaciones);
        res.render('registro', {Validaciones});
    }
    else{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
                
        let Hasheo = await bycriptjs.hash(password, 8);
        conexion.query('INSERT INTO usuarios SET ?', {username: username, email:email, password: Hasheo}, async(error, results) =>{
            if(error){
                if(error.code === 'ER_DUP_ENTRY'){
                    console.error("Entrada Duplicada");
                    const Validaciones = [{msg: 'Ya hay un usuario registrado con ese nombre y/o email'}];
                    res.render('registro', {Validaciones});
                }
            }else{
                conexion.query('SELECT * FROM usuarios WHERE username = ?', [username], async(error, results) =>{
                    if(error){
                        console.log(error);
                        res.send(error);
                    }
                    else{
                        req.session.user_id = results[0].id;
                        res.redirect('/inicio');
                    }
                })
            }
        })
    }
})
//Login-de-usuario
app.post("/login", async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    let passwordHash = await bycriptjs.hash(password,8);
    if(!username && password){
        const Validaciones = [{msg: 'Ingresa un username'}];
        console.log(Validaciones);
        res.render('login', {Validaciones});
    }
    else if(username && !password){
        const Validaciones = [{msg: 'Ingresa una contraseña'}];
        res.render('login', {Validaciones});
    }
    else if(username && password){
        conexion.query('SELECT * FROM usuarios WHERE username = ?', [username], async(error, results) =>{
            if(error){
                console.log(error);
                res.send(error);
            }
            else if(results.length == 0 || !(await bycriptjs.compare(password, results[0].password))){
                const Validaciones = [{msg: 'Usuario y/o contraseña incorrectos'}];
                res.render('login', {Validaciones});
            }
            else{
                req.session.user_id = results[0].id;
                res.redirect('/inicio');
            }
        })
    }
    else{
        const Validaciones = [{msg: 'Login invalido'}];
        res.render('login', {Validaciones});
    }
})
//Nuevo record PPM
app.post("/record", (req,res) =>{
    const id = req.body.id;
    const ppm = req.body.ppm_record;
    conexion.query('UPDATE usuarios SET ppm_record = ? WHERE id = ?', [ppm,id], (error, results) =>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            res.send("Nuevo record");
        }
    })
})
//Cerrar sesion
app.get("/cerrar-sesion", (req,res) =>{
    req.session.destroy(function(err) {
        if(err){
            console.log("Error al cerrar la sesion");
        }
        res.redirect("/");
    });
    
})

//LEVANTAMIENTO DEL SERVER
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`Servidor creado mi pana, en el puerto ${PUERTO}...`);
})