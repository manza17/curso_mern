"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//config the .env file
dotenv_1.default.config();
//create App from express
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
//first route of APP
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Goodbye, world",
    });
});
app.get("/hello", (req, res) => {
    const { name } = req.query;
    res.status(200).json({
        message: `Hola ${name ? String(name) : "anonimo"}`,
    });
});
app.listen(port, () => console.log(`Server runing in port: ${port}`));
//# sourceMappingURL=index.js.map