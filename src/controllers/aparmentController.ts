import { Request, Response } from 'express';
const pool = require('../services/dbService');

export const getAllAparments = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "apartments" JOIN "users" ON apartments.firebase_id = users.firebase_id WHERE free = true`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al recuperar departamento' });
  }
};

export const getAparmentById = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "apartments" JOIN "users" ON apartments.firebase_id = users.firebase_id WHERE apartments.id_apartment = $1`,
      [req.params.id]
    );
    const aparment = result.rows[0];
    if (aparment) {
      res.json(aparment);
    } else {
      res.status(404).json({ message: 'Departamento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar departamento' });
  }
};

export const getAparmentByUser = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "apartments" JOIN "users" ON apartments.firebase_id = users.firebase_id WHERE apartments.firebase_id = $1`,
      [req.params.id]
    );
    const aparments = result.rows;
    if (aparments) {
      res.json(aparments);
    } else {
      res.status(404).json({ message: 'Departamentos no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar departamentos' });
  }
};

export const createAparment = async (req: Request, res: Response) => {
  try {
    const { firebase_id, adress, description, building, m2, cod, floor, free } =
      req.body;
    const query = `INSERT INTO "apartments" (firebase_id, adress, description, building, m2, cod, floor, free) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const result = await pool.query(query, [
      firebase_id,
      adress,
      description,
      building,
      m2,
      cod,
      floor,
      free,
    ]);
    const newAparment = result;
    res.status(201).json({ message: newAparment });
  } catch (error) {
    console.error(error, 'error');
    res.status(500).json({ message: 'Error al crear departamento' });
  }
};

export const updateAparment = async (req: Request, res: Response) => {
  try {
    const { adress, description, building, m2, cod, floor, free } = req.body;
    const query = `UPDATE "apartments" SET adress = $1, description = $2, building = $3, m2 = $4, cod = $5, floor = $6, free = $7 WHERE firebase_id = $8 RETURNING *`;
    const result = await pool.query(query, [
      adress,
      description,
      building,
      m2,
      cod,
      floor,
      free,
      req.params.id,
    ]);

    const updatedAparment = result.rows[0];
    if (updatedAparment) {
      res.json(updatedAparment);
    } else {
      res.status(404).json({ message: 'Departamento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar departamento' });
  }
};

export const deleteAparment = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `DELETE FROM "apartments" WHERE id_apartment = $1 RETURNING *`,
      [req.params.id]
    );
    const deletedAparment = result.rows[0];
    if (deletedAparment) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Departamento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar departamento' });
  }
};
