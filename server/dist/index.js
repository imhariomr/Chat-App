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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const room_routes_1 = __importDefault(require("./routes/room.routes"));
const app = (0, express_1.default)();
const port = 3001;
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/user', user_routes_1.default);
app.use('/api/room', room_routes_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        console.log("Database connected");
    });
}
main();
// .catch(e => console.error(e))
// .finally(() => prisma.$disconnect());
app.listen(port, () => {
    console.log(`The App is listening on ${port}`);
});
