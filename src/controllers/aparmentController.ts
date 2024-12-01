import { Request, Response } from 'express';
const pool = require('../services/dbService');

export const getAllAparments = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "apartments" JOIN "users" ON apartments.firebase_id = users.firebase_id`
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
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
    const { firebase_id, adress, description, building, m2, cod, floor } =
      req.body;
    const query = `INSERT INTO "apartments" (firebase_id, adress, description, building, m2, cod, floor) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const result = await pool.query(query, [
      firebase_id,
      adress,
      description,
      building,
      m2,
      cod,
      floor,
    ]);
    const newAparment = result;
    res.status(201).json({ message: newAparment });
  } catch (error) {
    console.log(error, 'error');
    res.status(500).json({ message: 'Error al crear departamento' });
  }
};

export const updateAparment = async (req: Request, res: Response) => {
  try {
    const { adress, description, building, m2, cod, floor } = req.body;
    const query = `UPDATE "apartments" SET adress = $1, description = $2, building = $3, m2 = $4, cod = $5, floor = $6 WHERE firebase_id = $7 RETURNING *`;
    const result = await pool.query(query, [
      adress,
      description,
      building,
      m2,
      cod,
      floor,
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
      `DELETE FROM "apartments" WHERE firebase_id = $1 RETURNING *`,
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
