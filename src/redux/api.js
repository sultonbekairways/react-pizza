import axios from "axios"

const API = process.env.REACT_APP_API

export const fetchPizzasApi = (category, { type, order }) => {
  return axios.get(`${API}/pizzas?${category != null ? `category=${category}` : ''}&_sort=${type}&_order=${order}`)
    .then(({ data }) => data)
}