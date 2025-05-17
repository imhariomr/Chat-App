import Button from "../Button";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Logout(){
    const logOut = () => {
      console.log("cfw", typeof window);
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        const tokenExpiry = localStorage.getItem("tokenExpiry");
        if (token && tokenExpiry) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiry");
          localStorage.removeItem("isLoggedIn");
          toast.success("LogOut Successfully");
        }
      }
    };
    return(
        <div>
            <Button label="Logout" size="md" color="primary" onClick={logOut}/>
        </div>
    )
}