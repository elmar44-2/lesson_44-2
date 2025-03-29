import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json()
}


export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}

export const searchProducts = async (query) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
    return response.data.products
}

export const registerUser = async (userData) => {
    const response = await axios.post("https://dymmyjson.com/auth/register", userData)
    return response.data
}