"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const errorHandler_1 = require("./middleware/errorHandler");
const dotenv_1 = __importDefault(require("dotenv"));
const loggerFunction_1 = require("./middleware/loggerFunction");
const customHeader_1 = __importDefault(require("./middleware/customHeader"));
const rateLimiter_1 = require("./middleware/rateLimiter");
dotenv_1.default.config();
let count = 3;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, customHeader_1.default)('by nirmit'));
app.use(loggerFunction_1.loggerFunction);
app.use((0, rateLimiter_1.rateLimiter)(count));
app.use("/api", userRoutes_1.router);
app.use(errorHandler_1.errorHandler);
app.listen(3000, () => {
    console.log("app is fine");
});
