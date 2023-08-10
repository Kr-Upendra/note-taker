import yup from "yup";

const userValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "name can not be less than 3 chars!")
    .required("name is required!")
    .trim(),
  email: yup
    .string()
    .email("please provide a valid email!")
    .required("please provide an email!")
    .trim(),
  password: yup.string().min(6).required("please provide a password!"),
});

export default userValidationSchema;
