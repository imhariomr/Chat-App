import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form className="space-y-4">
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="text" placeholder="Enter your email" />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input type="password" placeholder="Enter your password" />
            </div>
  
            <div className="flex justify-center">
              <Button
                color="primary"
                size="lg"
                icon={faUser}
                iconSize="sm"
                label="Log In"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
  