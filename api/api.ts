import { productAPI } from './API_URL';
import { Product } from '../interfaces/Product';

export async function fetchProduct() {
    const response = await fetch(productAPI);
    const data = await response.json();
    return data;
}

export function createProduct(newItem: Product) {
    return fetch(productAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
    });
}

export function updateProduct(newItem: Product) {
    return fetch(productAPI + newItem.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    });
}

export function deleteProduct(id: Number) {
    return fetch(productAPI + id, {
        method: "DELETE",
    });
}