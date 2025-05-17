import { Router } from "express";
import { createRoom } from "../controllers/room.controller";

const router = Router();

router.get('/createRoom',createRoom);

export default router;