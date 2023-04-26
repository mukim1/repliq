import { axios_private } from "../utility/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "../Contexts/Auth_context";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, QueryCache } from "@tanstack/react-query";

const useReact_query = () => {
  const refresh = useRefreshToken();
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const requestIntercept = axios_private.interceptors.request.use(
      (config: any) => {
        if (!config.headers["token"]) {
          // config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
          config.headers["token"] = `${auth.user.token}`;
          config.headers["brand_id"] = `${auth.user.id}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axios_private.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        console.log(error);
        navigate("/signin", { state: { from: location } });

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          console.log("Access token has been expire");
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axios_private(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios_private.interceptors.request.eject(requestIntercept);
      axios_private.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  const queryOptions = {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
    // enabled:false
  };

  const useProducts = () =>
    useQuery(
      ["products"],
      () => axios_private.get("/product/getall"),
      queryOptions
    );

  const useOrders = () =>
    useQuery(
      ["orders"],
      () => axios_private.get("/order/getall").then((d) => d.data),
      queryOptions
    );

  return { useProducts, useOrders };
};

export default useReact_query;
