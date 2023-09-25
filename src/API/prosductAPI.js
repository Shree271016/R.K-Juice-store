import { API } from "../config";

// get all products
export const getAllProducts = () => {
    return fetch (`${API}/getall`)
}