import { axios } from "../../lib/axios";
import { useMutation } from "react-query";
import { queryClient } from "../../lib/reacy-query";

interface CreateHotelDTO {
  hotel_name: string;
  city_code: number;
  country_code: number;
}

export const createHotel = (data: CreateHotelDTO) => {
  return axios.post("/hotel", data);
};

export const useCreateHotel = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries("hotel");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("hotel");
    },
    mutationFn: createHotel,
  });
};
