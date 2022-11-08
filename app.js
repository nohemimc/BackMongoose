const express = require('express')
const app = express()
const mongoose = require('mongoose')
const blogRouter = require("./routes/BlogRoutes")
const dotenv = require('dotenv')
dotenv.config()
const cors = require ('cors')

// configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Connected to MongoDB");
        }
    }
)

app.use(cors())

// middleware (permite la comunicación entre apps)
app.use(express.json())

// middleware (permite el uso de las rutas)
app.use("/api/blogs", blogRouter)

app.listen(3000)

module.exports = app;

/*

    App que se ejecuta en el puerto 3000
    Middleware que analizará los datos en la carga útil de la solicitud
    Método de conexión a la base de datos
    Middleware para el uso de las rutas

*/