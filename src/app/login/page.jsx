"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeClosed } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";

export default function Basic() {
    const [Showpass, setShowpass] = useState(false);

    const handleShowpass = () => {

        setShowpass(!Showpass);


    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData)
        const data = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Sign in to continue to your account.
                    </p>
                </div>

                <Form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8} className={"relative"}
                        name="password"
                        type={Showpass ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <button
                            type="button" className="absolute right-3  top-8 cursor-pointer" onClick={() => handleShowpass()}>
                            {Showpass ? <Eye /> : <EyeClosed />}
                        </button>

                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>


                    <div className="flex gap-3 pt-2">
                        <Button type="submit" className="flex-1">
                            <Check />
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="flex-1"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}