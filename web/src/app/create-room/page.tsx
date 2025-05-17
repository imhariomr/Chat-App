'use client'
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { useForm } from "react-hook-form";

interface FormData {
  roomId: string;
}
export default function CreateRoom() {
  const { register, handleSubmit, formState: {isValid }} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log("abd", data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Join Room</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 pl-1"
            >
              Enter Room ID
            </label>
            <Input
              type="text"
              placeholder="Enter Room ID"
              {...register("roomId", {
                required: "Room ID is required",
              })}
            />
          </div>
          <Button
            color="primary"
            size="lg"
            label="Join Room"
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
}
