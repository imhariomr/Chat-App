"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "must be at least 6 characters")
});
exports.loginValidator = zod_1.z.object({
    email: zod_1.z.string().email('Invalid format'),
    password: zod_1.z.string().min(6, "must be at least 6 characters")
});
