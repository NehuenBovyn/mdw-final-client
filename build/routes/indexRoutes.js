"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./userRoutes/user.routes"));
const index_routes_1 = __importDefault(require("./indexRoutes/index.routes"));
const router = (0, express_1.Router)();
// Rutas de la API
router.use('/users', user_routes_1.default);
router.use('/', index_routes_1.default);
exports.default = router;
