 "use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import {CreateAppointmentSchema, getAppointmentSchema } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { FormFieldType } from "./PatientForm"
import { SelectItem } from "../ui/select"
import Image from "next/image"
import { Doctors } from "@/constants"
import { createAppointment, updateAppointment } from "@/lib/actions/appointment.actions"
import { Appointment } from "@/types/appwrite.types"

const formSchema = z.object({
    username : z.string().min(2, {
        message: "Username is too short"
    }),
})
const AppointmentForm = ({
    userId, patientId, type, appointment, setOpen
}: {
    userId: string;
    patientId: string;
    type: "create" | "cancel" | "schedule";
    appointment ?: Appointment;
    setOpen: (open: boolean) => void;   
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const AppointmentFormValidation = getAppointmentSchema(type);

    const form = useForm<z.infer<typeof AppointmentFormValidation>>({
        resolver: zodResolver(AppointmentFormValidation ),
        defaultValues: {
            primaryPhysician: appointment ? appointment.primaryPhysician : "",
            schedule: appointment ? new Date(appointment.schedule) : new Date(),
            reason: appointment ? appointment.reason : "",
            note: appointment ? appointment.note : "",
            cancellationReason: appointment && appointment.cancellationReason || "",
        },
    })

    async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
        setIsLoading(true);
        let status;
        switch(type){
            case 'schedule':
                status = 'scheduled';
                break;
            case 'cancel':
                status = 'cancelled';
                break;
            default:
                status = 'pending';
                break;
        }
        try {
            if(type === 'create' && patientId){
                const appointmentData = {
                    userId,
                    patient : patientId,
                    primaryPhysician: values.primaryPhysician,
                    schedule: new Date(values.schedule),
                    reason: values.reason!,
                    note: values.note,
                    status: status as Status,
                }
                const appointment = await createAppointment(appointmentData);
                console.log(appointment);
                if(appointment){
                    form.reset();
                    router.push(`/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`);
                }
            }else{
                const  appointmentToUpdate = {
                    userId,
                    appointmentId: appointment?.$id!,
                    appointment : {
                        primaryPhysician: values?.primaryPhysician,
                        schedule: new Date(values?.schedule),
                        status: status as Status,
                        cancellationReason: values?.cancellationReason,
                    },
                    type 
                }
                const updatedAppointment = await updateAppointment(appointmentToUpdate);
            
            if(updatedAppointment){
                setOpen && setOpen(false);
                form.reset();
            }
        }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);  
    };

    let buttonLabel;
    switch(type){
        case 'cancel':
        buttonLabel = 'Cancel Appointment';
        break;
        case 'create':
        buttonLabel = 'Create Appointment';
        break;
        case 'schedule':
        buttonLabel = 'Schedule Appointment';
        break;
        default:
        break;
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {type === 'create' && <section className= "mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">Request a new appointment in 10 seconds</p>
        </section>}
        {type !== 'cancel' && (
            <>
                <CustomFormField 
                fieldType = {FormFieldType.SELECT }
                control={form.control}
                label="Doctor"
                name="primaryPhysician"
                placeholder="Select a doctor"
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

                <CustomFormField
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                label="Expected appointment date"
                name="schedule"
                showTimeSelect
                dateFormat="MM/dd/yyyy - h:mm aa"
                renderSkeleton={() => <div>Loading..</div>}
                />

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    label="Reason for appointment"
                    name="reason"
                    placeholder="Enter reason for the appointment"
                    renderSkeleton={() => <div>Loading..</div>}
                    />
                    <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    label="Additional notes"
                    name="note"
                    placeholder="Enter any additional notes"
                    renderSkeleton={() => <div>Loading..</div>}
                    />
                </div>
            </>
        )}

        {type == 'cancel' && (
            <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Enter reason for cancellation"
            renderSkeleton={() => <div>Loading..</div>}
            />
        )}

        

        <SubmitButton isLoading={isLoading} className={`${type == 'cancel' ? 'shad-danger-btn' :'shad-primary-btn'} w-full`}>{buttonLabel}</SubmitButton>
      </form>
    </Form>
  )
}

export default AppointmentForm