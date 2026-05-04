"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { name, email, password, photo } = data;

    const { data: formData, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo || undefined,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    if (formData) {
      alert("signup successful");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="card bg-base-100 w-full max-w-sm shadow-2xl"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="font-bold text-2xl text-center mt-4">
          Register a new account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              {...register("name")}
            />
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
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Photo"
              name="photo"
              {...register("photo")}
              required
            />
            <p>
              Already have an account?{" "}
              <Link className="text-blue-400" href={"/login"}>
                Login
              </Link>
            </p>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
