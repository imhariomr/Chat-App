'use client'
import { useRoom } from "@/context/room-context";
import Button from "@/shared/ui/Button";

export default function Dashboard(){
    const {getRoomID} = useRoom();
    return(
        <div>
            <Button label="Create Room" color="primary" size="sm" onClick={getRoomID}/>
        </div>
    )
}