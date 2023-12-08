import { axios } from "../../lib/axios";
import { useQuery } from "react-query";

interface Hotel {
  hotel_id: string;
  hotel_name: string;
  city_code: number;
  city_name: string;
  country_code: number;
  country_name: string;
}

export const getHotels = (): Promise<Hotel[]> => {
  return axios.get("/hotel");
};

export const useGetHotels = () => {
  return useQuery<Hotel[], Error>({
    queryKey: ["hotel"],
    queryFn: getHotels,
  });
};
