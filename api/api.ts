import { product } from './API_URL';
import { Product } from '../interfaces/Product';

export async function fetchProduct() {
    const response = await fetch(product);
    const data = await response.json();
    return data;
}

export function createProduct(newItem: Product) {
    return fetch(product, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
    });
}

export function updateProduct(newItem: Product) {
    return fetch(product + newItem.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    });
}

export function deleteProduct(newItem: Product) {
    return fetch(product + newItem.id, {
        method: "DELETE",
    });
}