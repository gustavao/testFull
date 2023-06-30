import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import router from './routes';
import sequelize from './config/database';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });