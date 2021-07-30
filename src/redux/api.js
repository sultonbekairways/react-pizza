import axios from "axios"

export const fetchPizzasApi = (category, { type, order }) => {
  return axios.get(`/pizzas?${category != null ? `category=${category}` : ''}&_sort=${type}&_order=${order}`)
    .then(({ data }) => data)
}