import * as yup from "yup";

export const customerSechema = yup.object().shape({
    name : yup.string().trim().nullable().required("name is required"),
    username: yup.string().trim().nullable().required("UserName is required"),
    email: yup.string().trim().nullable().required("email is required"),
    profilePicture: yup.object().nullable().required("profilePicture is required"),
})  