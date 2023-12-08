import { axios } from "../../lib/axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

interface LoginDTO {
  username: string;
  password: string;
}

export const login = (data: LoginDTO) => {
  return axios.post("/auth/login", data);
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    onSuccess: (data) => {
      // @ts-expect-error here
      localStorage.setItem("token", data.token);
      navigate("/hotels");
    },
    onError: (error) => {
      console.error(error);
    },
    mutationFn: login,
  });
};
