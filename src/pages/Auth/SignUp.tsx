import axios from "axios";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError } from "zod";
import InputTwo from "../../components/Inputs/InputTwo";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { useAuth } from "../../Contexts/Auth_context";
import useToast from "../../hooks/useToast";
import { MerchantInput, merchantSchema } from "../../utility/validation";

const initialField = {
  brand_name: "",
  email: "",
  phone: "",
  password: "",
  password_confirmation: "",
};

const SignUp = () => {
  const { dispatchUser } = useAuth();
  const navigate = useNavigate();
  const msg = useToast();
  const [formData, setFormData] = React.useState<MerchantInput>(initialField);
  const [errors, setErrors] = React.useState({} as any);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("handleChange");
      const { name, value } = e.target;
      errors[name] && delete errors[name];
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData, errors]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validDara = merchantSchema.parse(formData);
      const { password_confirmation: _, ...newObj } = validDara;
      const response = await axios.post("/brand/register", {
        ...newObj,
        user_type: "ADMIN",
      });
      if (response.status === 200) {
        dispatchUser({ type: "SET_USER", payload: response.data });
        navigate("/");
        msg.success("User created successfully");
        // navigate("/signin");
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        setErrors(error.flatten().fieldErrors);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <AuthLayout handleSubmit={handleSubmit} title={"Sign Up"}>
      {data.map((item) => (
        <InputTwo
          key={item.id}
          id={item.id.toString()}
          name={item.name}
          label={item.label}
          placeholder={item.placeholder}
          onChange={handleChange}
          otherProps={{ errors }}
          type={item.type}
        />
      ))}
    </AuthLayout>
  );
};

export default SignUp;

const data = [
  {
    id: 1,
    name: "brand_name",
    placeholder: "Ex. Cloth Exclusive",
    label: "Brand name",
    type: "text",
  },
  {
    id: 3,
    name: "email",
    placeholder: "Ex. jon@gmail.com",
    label: "Email",
    type: "email",
  },
  {
    id: 4,
    name: "phone",
    placeholder: "Ex. +91-1234567890",
    label: "Phone",
    type: "text",
  },
  {
    id: 5,
    name: "password",
    placeholder: "Ex. *******",
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    name: "password_confirmation",
    placeholder: "Ex. *******",
    label: "Confirm Password",
    type: "password",
  },
];
