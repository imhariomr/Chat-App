import {z} from "zod";

export const signupSchema = z.object({
    name : z.string().min(1,"Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6,"must be at least 6 characters")
})

export const loginValidator = z.object({
    email : z.string().email('Invalid format'),
    password : z.string().min(6,"must be at least 6 characters")
})