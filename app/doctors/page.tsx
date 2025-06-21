"use server"

import { Doctors } from '@/constants'
import React from 'react'
import DoctorsDeatails from '../../components/DoctorsDetails'
import DoctorsDetails from '../../components/DoctorsDetails'

const page = () => {
  return (
    <main>
        <DoctorsDetails/>
    </main>
  )
}

export default page