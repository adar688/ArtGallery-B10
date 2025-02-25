'use client'

import React, { useEffect, useState } from "react";
import Heading from "../General/Heading"; // Importing Heading component
import Input from "../Inputs/Input" // Importing Input component
import { FieldValues,SubmitHandler, useForm } from "react-hook-form"; // Importing necessary types and functions from react-hook-form
import Button from "../General/Button"; // Importing Button component
import Link from "next/link"; // Importing Link component from Next.js
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { callback } from "chart.js/dist/helpers/helpers.core";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface LoginFormProps{
    currentUser: SafeUser | null
}

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {

    // State to manage loading state
    const [isLoading, setisLoading] =useState(false); 
    // Destructuring useForm hook to register form fields and handle form submission
    const {
        register,
        handleSubmit,
        formState: {errors}
    } =useForm<FieldValues>({
        defaultValues:{
            email: "",
            password:"",
        },
    });

    const router = useRouter();

    useEffect(()=>{
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

     // Function to handle form submission
    const onSubmit: SubmitHandler<FieldValues> = (data) => 
    {
        setisLoading(true);
        signIn('credentials',{
            ...data,
            redirect: false
        }).then((callback)=>{
            setisLoading(false);

            if(callback?.ok){
                router.push('/cart');
                router.refresh();
                toast.success('Logged In');
            }
            
            if(callback?.error){
                toast.error(callback.error);
            }

        })
    };
    
    if(currentUser){
        return <p className="text-center ">Logged in. Redirecting...</p>
    }
    
    
    return (
        <>
            {/* Heading component */}
            <Heading title="Sign in to Frame of Fame"/>
            <Button
            outline
            label="Continue with Google"
            icon={AiOutlineGoogle}
            onClick={() => {signIn('google')}}
            ></Button>
            {/* Horizontal line */}
            <hr className="bg-slate-300 w-full h-px "/>
            <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input
            id="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
            />
            <Button label={isLoading ? "Loading" : 'Login'} 
            onClick={handleSubmit(onSubmit)}
            />
            <p className="text-sm ">
                Do not have an account? 
                <Link className="underline" 
                href='/register'>
                Sign up
                </Link>
            </p>
        </>
    );
};

export default LoginForm;