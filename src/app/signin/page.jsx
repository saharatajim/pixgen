"use client";
import { Check } from "@gravity-ui/icons";
import  { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const { 
        register,
        handleSubmit,
        formState: { errors },
          }=useForm()

  const onSubmit = async (formData) => {
    // e.preventDefault();
    // const name=e.target.name.value
    // const image=e.target.image.value
    // const email=e.target.email.value
    // const password=e.target.password.value
    const {email,password } = formData;
    console.log({password,email})
    const {data,error}=await authClient.signIn.email({
      password,email,callbackURL:'/'
    })
    console.log( {data,error})
    
  };
  const handleGoogleSignIn=async()=>{
  await authClient.signIn.social({
    provider: "google"
})
    }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <form className="flex w-96 mx-auto flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
 

        <TextField
          
          type="email"
        >
          <Label>Email</Label>
          <Input 
          { ...register("email",{required:"Email is Required"})} 
          placeholder="john@example.com" />
          {errors.email&&<p className='text-red-400'>{errors.email.message}</p>}
        </TextField>

        <TextField
          isRequired
          minLength={8}
        
          type="password"
         
        >
          <Label>Password</Label>
          <Input 
          { ...register("password",{required:"password is Required"})} 
          placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p>Or</p>
       
      </form>
       <button onClick={handleGoogleSignIn} className="btn border rounded-2xl active:scale-90  bg-accent">Google Signin</button>
         
    </Card>
  );
}