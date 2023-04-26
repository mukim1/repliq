// import axios from "../utility/axiosInstances";
// import { useAuth } from "../Contexts/Auth_context";

const useRefreshToken = () => {
  // const { auth, setAuth } = useAuth();

  const refresh = async () => {
    // const response = await axios.post("/sessions/refresh", {}, {
    //   headers: {
    //     "x-refresh": auth?.refreshToken,
    //   }
    // });
    // setAuth((prev: any) => {
    //   console.log(JSON.stringify(prev));
    //   console.log(response.data.accessToken);
    //   return { ...prev, accessToken: response.data.accessToken };
    // });
    // return response.data.accessToken;
    // if fail to refresh then -  navigate("/signin", { state: { from: location } });
  };
  return refresh;
};

export default useRefreshToken;
