import { axios } from "../../lib/axios";
import { useMutation } from "react-query";

interface RegisterDTO {
  username: string;
  password: string;
  email: string;
}

export const register = (data: RegisterDTO) => {
  return axios.post("/auth/register", data);
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
