import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Field from "../components/field/Field";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import IconEyeOpen from "../assets/icon/IconEyeOpen";
import IconEyeClose from "../assets/icon/IconEyeClose";
import Button from "../components/button/Button";

const schema = yup.object({
    email: yup.string().email("Please enter valid email").required("Please enter your email"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 charators or greater")
        .required("Please enter your password"),
});

const SignInPage = () => {
    const [tooglePassword, setTooglePassword] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const handleSignIn = (values) => {
        // console.log(values);
        if (!isValid) return;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    };
    useEffect(() => {
        document.title = "Sign In Page";
    }, []);
    return (
        <form
            className="max-w-[350px] mx-auto my-10"
            onSubmit={handleSubmit(handleSignIn)}
            autoComplete="false"
        >
            <Field>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" placeholder="Enter your email" control={control} />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </Field>
            <Field>
                <Label htmlFor="password">Password</Label>
                <Input
                    type={tooglePassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    control={control}
                >
                    {tooglePassword ? (
                        <IconEyeOpen
                            onClick={() => {
                                setTooglePassword(false);
                            }}
                        ></IconEyeOpen>
                    ) : (
                        <IconEyeClose
                            onClick={() => {
                                setTooglePassword(true);
                            }}
                        ></IconEyeClose>
                    )}
                </Input>
                {errors.password && (
                    <p className="text-red-400 text-sm">{errors.password.message}</p>
                )}
            </Field>
            <Button
                className="p-5 leading-4 text-white bg-slate-900 font-semibold rounded-lg mt-2 w-full select-none disabled:opacity-50 disabled:pointer-events-none"
                type="submit"
                disabled={isSubmitting}
            >
                Sign In
            </Button>
        </form>
    );
};

export default SignInPage;
