// import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputTwo from "../../components/Inputs/InputTwo";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { useAuth } from "../../Contexts/Auth_context";
import useToast from "../../hooks/useToast";
import axios from "../../utility/axios";

const SignIn = () => {
  const { dispatchUser } = useAuth();
  const { error, success } = useToast();
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/brand/login", formData);
      console.log(response);
      if (response.status === 200) {
        dispatchUser({ type: "SET_USER", payload: response.data });
        navigate(from, { replace: true });
        success("Logged in successfully");
        console.log(from);
      }
    } catch (e) {
      console.log(e);
      error("Invalid credentials");
    }
  };

  return (
    <AuthLayout handleSubmit={handleSubmit} title="Sign In">
      <InputTwo
        label="Username"
        placeholder="Ex. harun_khan"
        name="email"
        id="3"
        onChange={handleChange}
      />
      <InputTwo
        label="Password"
        placeholder="Ex. *******"
        name="password"
        id="5"
        onChange={handleChange}
        type="password"
      />
    </AuthLayout>
  );
};

export default SignIn;
