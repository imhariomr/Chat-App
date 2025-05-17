'use client'
import axios from "axios";
import { Children, createContext, useContext, useEffect, useState } from "react";

interface RoomContextType{
    getRoomID?:any;
    roomId ?: string
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export default function RoomProvider({children}:any){
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [roomId,setRoomId] = useState();
    const getRoomID = async() => {
        const response = await axios.get(`${API_URL}/room/createRoom`);
        if(response){
            const roomId = response.data.room_id;
            setRoomId(roomId);
        }
    }

    return(
        <RoomContext.Provider value={{roomId,getRoomID}}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoom = () => {
    const context = useContext(RoomContext);
    if (!context) {
      throw new Error("useRoom must be used within a RoomProvider");
    }
    return context;
};