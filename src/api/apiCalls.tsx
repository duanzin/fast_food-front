import axios from "axios";
import { OrderDetails } from "../utils/types";

export async function getMeals() {
  const res = await axios.get(`${process.env.VITE_API_URL}/`);
  return res.data;
}

export async function create(body: OrderDetails) {
  await axios.post(`${process.env.VITE_API_URL}/`, body);
}

export async function update(id: number) {
  const res = await axios.patch(`${process.env.VITE_API_URL}/${id}`);
  return res.data;
}

export async function remove(id: number) {
  const res = await axios.delete(`${process.env.VITE_API_URL}/${id}`);
  return res.data;
}
