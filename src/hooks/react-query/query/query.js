import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const getTodos = async (limit, page) => {
  let queryParam = "";

  if (limit && page) {
    queryParam = `?_page=${page}&_per_page=${limit}`;
  }

  const response = await axios.get(`${apiUrl}/todos${queryParam}`);
  console.log(response);
  return response;
};

export function useTodosQuery(limit, page) {
  return useQuery({
    queryKey: ["todos", limit, page],
    queryFn: () => getTodos(limit, page),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
