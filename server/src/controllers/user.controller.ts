import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signupSchema } from "../validators/auth.schema";

const prisma = new PrismaClient();

export const signup = async(req:Request,res:Response):Promise<any>=>{
    try{
        const parsed = signupSchema.safeParse(req.body);
        if (!parsed.success) {
            const error = parsed.error.errors[0].message;
            return res.status(400).json({ message: error });
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