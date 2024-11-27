import express from 'express';
import userRoutes from './routes/indexRoutes';

const app = express();

// app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes

// Rutas de usuario
app.use(userRoutes);

export default app;
