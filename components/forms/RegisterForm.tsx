"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import CustomFormField from "../CustomFormField"

import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { PatientFormValidation, UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser, registerPatient } from "@/lib/actions/patient.actions"
import { FormFieldType } from "./PatientForm"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Doctors, GenderOptions, IdentificationTypes, PatientFormDefaultValues } from "@/constants"
import { Label } from "../ui/label"
import { SelectItem } from "../ui/select"
import Image from "next/image"
import FileUploader from "../FileUploader"


const formSchema = z.object({
    username : z.string().min(2, {
        message: "Username is too short"
    }),
})

const RegisterForm = ({ user} : {user : User }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof PatientFormValidation>>({
        resolver: zodResolver(PatientFormValidation),
        defaultValues: {
            ...PatientFormDefaultValues,
            name: "",
            email: "",  
            phone: "",
        },
    })

    async function onSubmit(values: z.infer<typeof PatientFormValidation>) {
        setIsLoading(true);
        let formData;
        if(values.identificationDocument && values.identificationDocument?.length >0 ){
            const blobFile = new Blob([values.identificationDocument[0]], {
                type: values.identificationDocument[0].type,
            });
            formData = new FormData();
            formData.append('blobFile', blobFile);
            formData.append('fileName', values.identificationDocument[0].name);
        }

        try {
            const patientData = {
                ...values, 
                identificationDocument: formData,
                userId : user.$id,
                birthDate: new Date(values.birthDate),
            }
            //@ts-ignore
            const patient = await registerPatient(patientData);
            if(patient) router.push(`/patients/${user.$id}/new-appointment`);

        } catch (error) {
            console.error(error);
   
        }
        setIsLoading(false);
        
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-5">
        <section className= "space-y-4">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">Let us know more about yourself.</p>
        </section>

        <section className= "space-y-6">
            <div className="mb-8 space-y-1">
                <h2 className="sub-header">Personal Information</h2>
            </div>  
        </section>

        <CustomFormField 
        fieldType = {FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        renderSkeleton={() => <div>Loading..</div>}
        />

        <div className="flex flex-col gap-6 xl:flex-row">
            < CustomFormField 
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
            < CustomFormField 
                fieldType = {FormFieldType.DATE_PICKER}
                control={form.control}
                label="Date of Birth"
                name="birthDate"
                renderSkeleton={() => <div>Loading..</div>}
            />

            <CustomFormField 
                fieldType = {FormFieldType.SKELETON }
                control={form.control}
                label="Gender"
                name="gender"
                renderSkeleton={(field) => 
                    <FormControl>
                        <RadioGroup className="flex h-11 gap-6 xl:justify-between"
                        onValueChange={field.onChange} value={field.value}>
                          {GenderOptions.map((option) => (
                            <div key={option}
                                className="radio-group">
                                    <RadioGroupItem
                                    value={option} id={option}
                                    />
                                    <Label htmlFor={option}
                                    className="cursor-pointer"
                                    >
                                        {option}
                                    </Label>
                            </div>
                          ))}
                        </RadioGroup>
                    </FormControl>
                }
            />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
        < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Address"
                name="address"
                placeholder="Enter your address"
                renderSkeleton={() => <div>Loading..</div>}
            />
            < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Occupation"
                name="occupation"
                placeholder="Enter your occupation"
                renderSkeleton={() => <div>Loading..</div>}
            />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
        < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Emergency contact name"
                name="emergencyContactName"
                placeholder="Guardian's name"
                renderSkeleton={() => <div>Loading..</div>}
            />

            <CustomFormField 
                fieldType = {FormFieldType.PHONE_INPUT }
                control={form.control}
                label="Emergency contact number"
                name="emergencyContactNumber"
                placeholder="(+91) 12345679"
                renderSkeleton={() => <div>Loading..</div>}
            />
        </div>

        <section className= "space-y-6">
            <div className="mb-9 space-y-1">
                <h2 className="sub-header">Medical Information</h2>
            </div>  
        </section>

            <CustomFormField 
                fieldType = {FormFieldType.SELECT }
                control={form.control}
                label="Primary Physician"
                name="primaryPhysician"
                placeholder="Select a physician"
                renderSkeleton={() => <div>Loading..</div>}
            >
                {Doctors.map((doctor) => (
                    <SelectItem key={doctor.name} value={doctor.name}>
                        <div className="flex cursor-pointer items-center gap-2">
                            <Image 
                            src={doctor.image}
                            height={32}
                            width={32}
                            alt={doctor.name}
                            className="rounded-full border border-dark-500"
                            />
                            <p>{doctor.name}</p>
                        </div>
                    </SelectItem>
                ))}
            </CustomFormField>

        <div className="flex flex-col gap-6 xl:flex-row">
        < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Insurance provider"
                name="insuranceProvider"
                placeholder="BlueCross BlueShield"
                renderSkeleton={() => <div>Loading..</div>}
            />
            < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Insurance policy number"
                name="insurancePolicyNumber"
                placeholder="ABC123456"
                renderSkeleton={() => <div>Loading..</div>}
            />  
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
            < CustomFormField 
                fieldType = {FormFieldType.TEXTAREA}
                control={form.control}
                label="Allergies(if any)"
                name="allergies"
                placeholder="Peanuts, Penicillin, Pollen etc."
                renderSkeleton={() => <div>Loading..</div>}
            />
            < CustomFormField 
                fieldType = {FormFieldType.TEXTAREA}
                control={form.control}
                label="Current medications(if any)"
                name="currentMedication"
                placeholder="IbuProfen 200mg, Paracetamol 500mg etc."
                renderSkeleton={() => <div>Loading..</div>}
            />   
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
        < CustomFormField 
                fieldType = {FormFieldType.TEXTAREA}
                control={form.control}
                label="Family medical history"
                name="familyMedicalHistory"
                placeholder="Father had heart disease, Mother had diabetes etc."
                renderSkeleton={() => <div>Loading..</div>}
            />
            < CustomFormField 
                fieldType = {FormFieldType.TEXTAREA}
                control={form.control}
                label="Past medical history"
                name="pastMedicalHistory"
                placeholder="Diagnosed with asthma in 2015 etc."
                renderSkeleton={() => <div>Loading..</div>}
            />      
        </div>

        <section className= "space-y-6">
            <div className="mb-9 space-y-1">
                <h2 className="sub-header">Identification and Verification</h2>
            </div>  
        </section>

            <CustomFormField 
                fieldType = {FormFieldType.SELECT }
                control={form.control}
                label="Identification type"
                name="identificationType"
                placeholder="Select an ID type"
                renderSkeleton={() => <div>Loading..</div>}
            >
                {IdentificationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                        {type}
                    </SelectItem>
                ))}
            </CustomFormField>

            < CustomFormField 
                fieldType = {FormFieldType.INPUT}
                control={form.control}
                label="Identification number"
                name="identificationNumber"
                placeholder="123456789"
                renderSkeleton={() => <div>Loading..</div>}
            />

            <CustomFormField 
                fieldType = {FormFieldType.SKELETON }
                control={form.control}
                label="Scanned copy of ID"
                name="identificationDocument"
                renderSkeleton={(field) => (
                    <FormControl>
                        <FileUploader files={field.value} onChange={field.onChange}/>
                    </FormControl>
                )}
            />
        
        <section className= "space-y-6">
            <div className="mb-9 space-y-1">
                <h2 className="sub-header">Consent and Privacy</h2>
            </div>  
        </section>

        <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        label="I consent to treatement"
        name="treatmentConsent"
        renderSkeleton={() => <div>Loading..</div>}
        />
        <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        label="I consent to disclosure of information"
        name="disclosureConsent"
        renderSkeleton={() => <div>Loading..</div>}
        />
        <CustomFormField
        fieldType={FormFieldType.CHECKBOX}
        control={form.control}
        label="I consent to privacy policy"
        name="privacyConsent"
        renderSkeleton={() => <div>Loading..</div>}
        />





        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default RegisterForm