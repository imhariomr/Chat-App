"use client"
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    if(!name || !email || !password){
      toast.error("Please Fill All the fields");
    }

    try{
      const res = await axios.post(`http://localhost:3001/api/users/signup`,{
        name,email,password
      })
      if(res){
        toast.success("User Signed Up")
      }
    }catch(error:any){
      toast.error(error.response.data.message);
    }
  }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" placeholder="Enter your Name" onChange={(e:any) => setName(e.target.value)}/>
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="text" placeholder="Enter your email" onChange={(e:any) => setEmail(e.target.value)}/>
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input type="password" placeholder="Enter your password" onChange={(e:any) => setPassword(e.target.value)}/>
            </div>
  
            <div className="flex justify-center">
              <Button
                color="primary"
                size="lg"
                icon={faUser}
                iconSize="sm"
                label="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
  