require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const router = express.Router()



var userLogged = null


//registro
router.post('/register', async (req, res) => {
    console.log("solicitud recibida")
    const { username,nombre, password} = req.body;
    if (!username || !password || !nombre) {
        return res.status(400).send("Todos los campos son obligatorios");
    }
    try {
        const user = new User({ username, nombre, password });
        console.log('Datos recibidos:', username, password);
        await user.save();
        console.log(user.username)
        res.status(201).send("Usuario creado correctamente");
    } catch (err) {
        res.status(400).send('Error al crear Usuario');
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const {username, password, nombre } = req.body

    if(!username||!password || !nombre){
        return res.status(401).send("usuario o contraseña son requeridos.")
    }
    
    try {
        
        const user = await User.findOne({username:username})

        if(!user){
            return res.status(401).send("no se encuentra usuario")
        }
        
        const validatePassword = await bcrypt.compare(password, user.password);

        if(!validatePassword){
            return res.status(403).send("no coinciden las contraseñas")
        }

        userLogged = user
        console.log("este es el user:",userLogged)
        const token = jwt.sign({username:username}, process.env.jwt_secret, {expiresIn:'1h'});
        return res.status(200).json({token})

    } catch (error) {
        console.error("error al iniciar sesion", error)
    }

});



// Registro de vehículos
router.post('/vista/movil', async (req, res) => {
  const { marca, modelo, patente, numeroMovil } = req.body;
  try {

    if (!userLogged) {
      return res.status(404).send("No se encuentra el usuario");
    }

    userLogged.movil.push({ marca, modelo, patente, numeroMovil });
    await userLogged.save();
    res.status(201).send('Datos del movil agregados correctamente');
  } catch (err) {
    res.status(400).send("Error al cargar datos");
    console.log(err);
  }
});

router.post('/vista/servicio', async(req,res)=>{
    
    const {date,origen,total} = req.body

    if(!date||!origen||!total){
        res.status(403).send("se requiren todos los datos para opoder continuar");
    }

    try {

        if (!userLogged) {
            return res.status(403).send("Usuario no autenticado");
        }

        if (userLogged.movil.length === 0) {
            return res.status(403).send("El usuario no tiene móviles registrados");
        }

        const movil = userLogged.movil[0];

        movil.servicios.push({ date, origen, total });
        await userLogged.save();

        res.status(201).send('Datos del servicio agregados correctamente');
    } catch (error) {
        res.status(400).send("Error al cargar servicios");
        console.log(error);
    }

})

module.exports = router;