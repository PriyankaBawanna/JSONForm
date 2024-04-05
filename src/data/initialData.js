export const initialData = {
  fields: [
    {
      id: "fullname",
      label: "Full Name",
      type: "text",
      placeholder: "Type your full name...",
      required: true,
    },
    {
      id: "date_of_birth",
      label: "Date of Birth",
      type: "date",
      placeholder: "Select your date of birth...",
      required: true,
    },
    {
      id: "mobile",
      label: "Mobile",
      type: "tel",
      placeholder: "Enter your mobile number...",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Email ID",
      required: true,
    },
    {
      id: "gender",
      label: "Gender",
      type: "radiobutton",
      options: [
        { id: 1, display: "Male" },
        { id: 2, display: "Female" },
        { id: 3, display: "Other" },
      ],
      required: true,
    },
    {
      id: "employmentType",
      label: "Are you Govt employee ?",
      type: "dropdown",
      options: [
        { id: 1, display: "Yes" },
        { id: 2, display: "No" },
      ],
      required: true,
    },
    {
      id: "designation",
      label: "Designation",
      type: "text",
      placeholder: "Previous your designation...",
      required: false,
    },
    {
      id: "marital_status",
      label: "Marital Status",
      type: "dropdown",
      options: [
        { id: 1, display: "Single" },
        { id: 2, display: "Married" },
        { id: 3, display: "Divorced" },
      ],
      placeholder: "Select your marital status...",
      required: true,
    },

    {
      id: "technologies",
      label: "Technologies",
      type: "checkbox",
      options: ["React JS", "JavaScript", "HTML", "CSS", "Node JS", "Mongo DB"],
      required: true,
    },
    {
      id: "years_of_experience",
      label: "Years of Experience",
      type: "dropdown",
      options: [
        { id: 1, display: "1" },
        { id: 2, display: "2" },
        { id: 3, display: "3" },
        { id: 4, display: "4" },
        { id: 5, display: "5" },
        { id: 6, display: "6" },
      ],
      placeholder: "Enter your years of experience...",
      required: true,
    },

    {
      id: "upload_file",
      label: "Upload Your Resume ",
      type: "file",
      required: true,
    },
    {
      id: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter your address...",
      required: false,
    },
  ],
};
