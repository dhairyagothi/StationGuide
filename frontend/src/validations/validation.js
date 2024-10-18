import * as yup from "yup";

export const loginValidation = yup.object().shape({
  username: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
});

export const registerValidation = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^(?:\+91[-\s]?)?[789]\d{9}$/,
      "Phone number must be in a valid format"
    )
    .optional(""),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});
