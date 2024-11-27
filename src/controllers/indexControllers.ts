import { Request, Response } from 'express';
import { connectToDatabase } from '../services/dbService'; 

export const connectionDB = async (req: Request, res: Response) => {
  try {
    await connectToDatabase(); 
    res.json({ message: 'Conexión exitosa a la base de datos' });
  } catch (error) {
    res.status(500).json({ message: 'Error al conectar a la base de datos' });
  }
};
