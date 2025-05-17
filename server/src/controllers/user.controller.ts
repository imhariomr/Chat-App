import { json, Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { loginValidator, signupSchema } from "../validators/auth.schema";
import jwt  from "jsonwebtoken";

const prisma = new PrismaClient();
const secretKey = process.env.SECRET_KEY;

export const signup = async(req:Request,res:Response):Promise<any>=>{
    try{
        const parsed = signupSchema.safeParse(req.body);
        if (!parsed.success) {
            const field = parsed.error.errors[0].path[0];
            const error = parsed.error.errors[0].message;
            return res.status(400).json({ message: `${field} ${error}` });
        }
        const {name,email,password} = parsed.data;
        const existingUser = await prisma.user.findUnique({where:{
            email
        }})
        if(existingUser){
            return res.status(400).json({message:"User Already Exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
        res.status(201).json({
            message: "User created successfully",
            User
          });
    }catch(err){
        console.error("Signup error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async(req:Request,res:Response):Promise<any>=>{
    try{
        const parsed = loginValidator.safeParse(req.body);
        if (!parsed.success) {
            const field = parsed.error.errors[0].path[0];
            const error = parsed.error.errors[0].message;
            return res.status(400).json({ message: `${field} ${error}` });
        }
        const {email,password} = parsed.data;
        const userExist = await prisma.user.findUnique({
            where:{email},
        })
        if (!userExist) {
            return res.status(404).json({ message: "User Not Exist" });
        }
        const passwordVerified = await bcrypt.compare(password,userExist.password);
        if (!passwordVerified) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (!secretKey) {
            throw new Error("SECRET_KEY is not defined in environment variables");
        }
        const token = jwt.sign(
            {
              id: userExist.id,
              email: userExist.email,
            },
            secretKey,
            { expiresIn: "1h" }
        );
        return res.status(200).json({
            message:"Login successful",
            token,
            userExist
        })
    }catch(err){
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}