"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturaController_1 = __importDefault(require("../controllers/facturaController"));
class FacturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", facturaController_1.default.list);
        this.router.get("/:id", facturaController_1.default.getOne);
        this.router.post("/", facturaController_1.default.create);
        this.router.put("/:id", facturaController_1.default.update);
        //Obtiene los pedidos del USUARIO
        this.router.get("/get/:id", facturaController_1.default.listfacturaUser);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
