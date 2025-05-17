"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = void 0;
const uuid_1 = require("uuid");
const createRoom = (req, res) => {
    try {
        const generateId = (0, uuid_1.v4)();
        return res.status(200).json({ "room_id": generateId });
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
};
exports.createRoom = createRoom;
