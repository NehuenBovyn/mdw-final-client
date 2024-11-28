import { Request, Response } from 'express';
const pool = require('../services/dbService');

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM "Users"`);
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al recuperar usuarios' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM "Users" WHERE id = $1`, [
      req.params.id,
    ]);
    const user = result.rows[0];
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar usuario' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      `INSERT INTO "Users" (name, email) VALUES ($1, $2) RETURNING *`,
      [name, email]
    );
    const newUser = result.rows[0];
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      `UPDATE "Users" SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
      [name, email, req.params.id]
    );
    const updatedUser = result.rows[0];
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `DELETE FROM "Users" WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    const deletedUser = result.rows[0];
    if (deletedUser) {
      res.status(204).end(); // Sin contenido
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};
