import axios from "axios";
import { OrderDetails } from "../utils/types";

export async function getMeals() {
  console.log(process.env.REACT_APP_API_URL);
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/`);
  return res.data;
}

export async function create(body: OrderDetails) {
  await axios.post(`${process.env.REACT_APP_API_URL}/`, body);
}

export async function update(id: number) {
  const res = await axios.patch(`${process.env.REACT_APP_API_URL}/${id}`);
  return res.data;
}

export async function remove(id: number) {
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
  return res.data;
}
