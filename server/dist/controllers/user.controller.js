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
exports.login = exports.signup = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_schema_1 = require("../validators/auth.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const secretKey = process.env.SECRET_KEY;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = auth_schema_1.signupSchema.safeParse(req.body);
        if (!parsed.success) {
            const field = parsed.error.errors[0].path[0];
            const error = parsed.error.errors[0].message;
            return res.status(400).json({ message: `${field} ${error}` });
        }
        const { name, email, password } = parsed.data;
        const existingUser = yield prisma.user.findUnique({ where: {
                email
            } });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exist" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const User = yield prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        res.status(201).json({
            message: "User created successfully",
            User
        });
    }
    catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = auth_schema_1.loginValidator.safeParse(req.body);
        if (!parsed.success) {
            const field = parsed.error.errors[0].path[0];
            const error = parsed.error.errors[0].message;
            return res.status(400).json({ message: `${field} ${error}` });
        }
        const { email, password } = parsed.data;
        const userExist = yield prisma.user.findUnique({
            where: { email },
        });
        if (!userExist) {
            return res.status(404).json({ message: "User Not Exist" });
        }
        const passwordVerified = yield bcrypt_1.default.compare(password, userExist.password);
        if (!passwordVerified) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (!secretKey) {
            throw new Error("SECRET_KEY is not defined in environment variables");
        }
        const token = jsonwebtoken_1.default.sign({
            id: userExist.id,
            email: userExist.email,
        }, secretKey, { expiresIn: "1h" });
        return res.status(200).json({
            message: "Login successful",
            token,
            userExist
        });
    }
    catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.login = login;
