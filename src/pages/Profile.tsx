import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Contexts/Auth_context";
import { Brand } from "../Types/brand_type";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [brand, setBrand] = useState({} as Brand);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get(`/brand/${auth.user.id}`);
        console.log(response.data);
        isMounted && setBrand(response.data);
      } catch (err) {
        console.error(err);
        // navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  console.log(auth);

  return (
    <div>
      <h1
        className="text-2xl font-bold text-gray-800"
        style={{ textTransform: "capitalize" }}
      >
        {brand.brand_name}
      </h1>

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Email</span>
          <span className="text-gray-800 dark:text-gray-200">
            {brand.email}
          </span>

          <span className="text-gray-500">Phone</span>
          <span className="text-gray-800 dark:text-gray-200">
            {brand.phone}
          </span>

          <span className="text-gray-500">Address</span>
          <span className="text-gray-800 dark:text-gray-200">{brand.id}</span>

          <span className="text-gray-500">City</span>
          <span className="text-gray-800 dark:text-gray-200">{brand.id}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
