export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/david.png",
    name: "John Green",
  },
  {
    image: "/assets/images/leila.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/david.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/james.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/robert.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/emil.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/amanda.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/ane.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/james.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};