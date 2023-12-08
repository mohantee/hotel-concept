import { axios } from "../../lib/axios";
import { useMutation } from "react-query";
import { queryClient } from "../../lib/reacy-query";

export const deleteHotel = (id: string) => {
  return axios.delete(`/hotel${id}`);
};

export const useDeleteHotel = () => {
  return useMutation({
    onMutate: () => {
      queryClient.cancelQueries("hotel");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("hotel");
    },
    mutationFn: deleteHotel,
  });
};
