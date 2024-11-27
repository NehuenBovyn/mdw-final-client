const connection = require('../db/connection');

export const connectToDatabase = async (): Promise<void> => {
  try {
    await connection();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.log('Error al conectar a la base de datos', error);
  }
};
