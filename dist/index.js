"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
//config the .env file
dotenv_1.default.config();
const port = process.env.PORT || 8000;
server_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)(`[Server ON]: Running in localhost:${port}/api`);
});
//control server error
server_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`[Server Error]: ${error}`);
});
//# sourceMappingURL=index.js.map