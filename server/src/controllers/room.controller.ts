import { v4 as uuidv4 } from 'uuid';
import { Request,Response } from "express";
export const createRoom = (req:Request,res:Response):any=>{
    try{
        const generateId = uuidv4();
        return res.status(200).json({"room_id":generateId});
    }catch(error){
        return res.status(500).json("Internal Server Error");
    }
}