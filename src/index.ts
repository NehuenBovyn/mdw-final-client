import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import routes from './routes/indexRoutes';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // Cambia  según  entorno
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
const port = process.env.DB_PORT;

app.use(routes);
app.listen(port);
port ? console.log(`Server on ${port}`) : console.log('Server off');
