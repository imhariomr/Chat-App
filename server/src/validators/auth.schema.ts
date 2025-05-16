import {z} from "zod";

export const signupSchema = z.object({
    name : z.string().min(1,"Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(5,"Password must be at least 6 characters")
})

