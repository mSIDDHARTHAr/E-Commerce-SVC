const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const logInRoute = require('./routes/loginRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');

const Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library UI Project", // Correct spelling of 'UI'
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3900" // Corrected 'api' to 'url'
      }
    ]
  },
  apis: ["./routes/*.js"] // Path to the route files where you have API documentation
}

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const swagger = swaggerJSDoc(Options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger)); // Corrected the route spelling to lowercase

app.use('/api/users', userRoutes);
app.use('/api/login', logInRoute);
// app.use('/api/products' , )

app.use(errorHandler);

module.exports = app;
