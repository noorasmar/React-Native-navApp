import { productAPI } from './API_URL';
import { Product } from '../interfaces/Product';

export async function fetchProduct() {
    const response = await fetch(productAPI);
    const data = await response.json();
    return data;
}

export function createProduct(item: Product) {
    return fetch(productAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
}

export function updateProduct(item: Product) {
    return fetch(productAPI + item.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
}

export function deleteProduct(id: Number) {
    return fetch(productAPI + id, {
        method: "DELETE",
    });
}