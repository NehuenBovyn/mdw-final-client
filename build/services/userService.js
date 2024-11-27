"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
// Simulación de base de datos
let users = [];
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return users.find(user => user.id === id);
});
exports.getUserById = getUserById;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = Object.assign({ id: Date.now().toString() }, userData);
    users.push(newUser);
    return newUser;
});
exports.createUser = createUser;
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return undefined;
    users[index] = Object.assign(Object.assign({}, users[index]), updateData);
    return users[index];
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return false;
    users.splice(index, 1);
    return true;
});
exports.deleteUser = deleteUser;
