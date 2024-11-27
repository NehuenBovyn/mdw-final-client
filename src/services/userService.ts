import { User } from '../models/userModel';

// Simulación de base de datos
let users: User[] = [];

export const getAllUsers = async (): Promise<User[]> => {
  return users;
};

export const getUserById = async (id: string): Promise<User | undefined> => {
  return users.find(user => user.id === id);
};

export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  const newUser: User = { id: Date.now().toString(), ...userData };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, updateData: Partial<User>): Promise<User | undefined> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return undefined;
  users[index] = { ...users[index], ...updateData };
  return users[index];
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};
