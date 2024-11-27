"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../../controllers/indexControllers");
const router = (0, express_1.Router)();
router.get('/', indexControllers_1.connectionDB);
exports.default = router;
