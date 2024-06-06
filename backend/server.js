require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
/*  const authRoutes = require('./routes/auth')  */
const app = express()
const PORT = 7000
const userRoutes = require('./routes/auth.js');

app.use(bodyParser.json());

// Analizar solicitudes con datos codificados en formularios
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: 'http://localhost:4200',  // Permitir solicitudes desde este origen
    methods: ['GET', 'POST'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization']  // Encabezados permitidos
  }));

  app.use(session({
    secret: 'mysecretkey', // Cambia esto a una clave secreta más segura
    resave: false,
    saveUninitialized: true
}));

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@matti-app-remiseria.9fd8kyj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Matti-app-Remiseria`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Conexion a la base de datos establecida'))
.catch((err)=> console.error('Error al conectar a la base de datos: ',err));

// Analizar solicitudes con cuerpo JSON

console.log('JWT_SECRET:', process.env.jwt_secret);
app.use('/api', userRoutes);

app.get('/api', (req, res) => {
    res.send("Hola mundooo"); // Esta es una ruta adicional bajo /api, si es necesaria
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})




