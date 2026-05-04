"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { email, password } = data;

    const { data: loginUserData, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    if (loginUserData) {
      alert("login successful");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="card bg-base-100 w-full max-w-sm shadow-2xl"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="font-bold text-2xl text-center mt-4">
          Login to your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              {...register("email")}
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              {...register("password")}
              required
            />
            <p>
              Create a new account?{" "}
              <Link className="text-blue-400" href={"/register"}>
                Register
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
