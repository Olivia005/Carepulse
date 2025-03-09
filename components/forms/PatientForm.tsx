"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import CustomFormField from "../CustomFormField"
import exp from "constants"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
    INPUT= 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX ='checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const formSchema = z.object({
    username : z.string().min(2, {
        message: "Username is too short"
    }),
})

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        setIsLoading(true);
        try {
            const userData = {
                name,
                email,
                phone,
            };
          const user = await createUser(userData);
          if(user) {
              router.push(`/patients/${user.$id}/register`);
          }
        } catch (error) {
            console.error(error);
   
        }
        setIsLoading(false);  
    };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className= "mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomFormField 
        fieldType = {FormFieldType.INPUT}
        control={form.control}
        label="Full name"
        name="name"
        placeholder="Enter your full name"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        renderSkeleton={() => <div>Loading..</div>}
        />

<       CustomFormField 
        fieldType = {FormFieldType.INPUT}
        control={form.control}
        label="Email"
        name="email"
        placeholder="johndoe@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        renderSkeleton={() => <div>Loading..</div>}
        />

        <CustomFormField 
        fieldType = {FormFieldType.PHONE_INPUT }
        control={form.control}
        label="Phone number"
        name="phone"
        placeholder="(+91) 12345679"
        renderSkeleton={() => <div>Loading..</div>}
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm