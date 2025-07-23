import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(4, "Username must have more than 4 character"),
  password: z.string().min(6, "Password must have more than 6 character"),
});
export function LoginHookForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <Card className="max-w-sm">
      <form
        onSubmit={handleSubmit(async (data) => {
          let result = await fetch(`https://dummyjson.com/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: `${data.username}`,
              password: `${data.password}`,
              expiresInMins: 30,
            }),
          }).then((res) => res.json());
          setMessage(result.message);
          console.log(result);
        })}
        className="flex flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username">Your email</Label>
          </div>
          <TextInput
            {...register("username")}
            id="username"
            placeholder="Your username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput {...register("password")} />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>

        <p className="text-red-600">{message}</p>
      </form>
    </Card>
  );
}
