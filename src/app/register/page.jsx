"use client";
import { Radio, RadioGroup } from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { Check, EyeClosed, Eye } from "@gravity-ui/icons";

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [Showpass, setShowpass] = useState(false);

    const handleShowpass = () => {

        setShowpass(!Showpass);


    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const { data: res, error } = await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            role: data.role,
            plan: data.role === "seeker" ? "seekerFree" : "recruiterFree",
            callbackURL: "/login",
        });

        if (error) {
            alert(error.message)
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Create Account
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Sign up to get started with your account.
                    </p>
                </div>

                <Form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Full name</Label>
                        <div className="relative w-full">
                            <Input placeholder="please enter your name" className="w-full" />
                        </div>
                        <FieldError>You cannot leave this blank</FieldError>
                    </TextField>

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
                        <div className="relative w-full">
                            <Input placeholder="john@example.com" className="w-full" />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
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
                        <div className="relative w-full flex items-center">
                            <Input placeholder="Enter your password" className="w-full pr-10" />
                            <button
                                type="button"
                                className="absolute right-3 cursor-pointer flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                onClick={() => handleShowpass()}
                            >
                                {Showpass ? <Eye /> : <EyeClosed />}
                            </button>
                        </div>

                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>


                    {/* select role  */}

                    <div className="flex flex-col gap-4">
                        <Label>Select your role</Label>
                        <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Content>
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    Seeker
                                </Radio.Content>
                            </Radio>
                            <Radio value="recruiter">
                                <Radio.Content>
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    Recruiter
                                </Radio.Content>

                            </Radio>

                        </RadioGroup>
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-[#5C53FE] hover:bg-[#4a41e6] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                        <Check className="w-5 h-5" />
                        Register
                    </Button>


                </Form>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-[#5C53FE] hover:text-[#4a41e6] transition-colors hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>


        </div>
    );
}