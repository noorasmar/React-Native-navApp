import { product } from './API_URL';

export async function fetchProduct() {
    const response = await fetch(product);
    const data = await response.json();
    return data;
}