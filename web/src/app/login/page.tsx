import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
};
export default function login() {

  const {register,handleSubmit,formState: { errors,isValid }} = useForm<FormData>();
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input type="email" placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input type="password" placeholder="Enter your password" {...register("password",{required:"password is required",minLength:{
                value:6,
                message:"password should be longer than 6 digit"
              }})}/>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className="flex justify-center">
              <Button
                color="primary"
                size="lg"
                icon={faUser}
                iconSize="sm"
                label="Log In"
                disabled={!isValid}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
  