'use client'
import Logout from "@/shared/ui/logout/logout";
import { checkTokenExpiry } from "../../utils/auth";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    checkTokenExpiry();
  }, []);
  return(
    <div className="flex gap-2">
      <Logout/>
    </div>
  );
}

