export interface ProductRoot {
    data: DataProduct;
}

export interface DataProduct {
    page: string;
    limit: String;
    countDocuments: number;
    items: Product[];
}

export interface Product {
    uid: string;
    name: string;
    price: number;
    stock: number;
    active: boolean;
    category: string;
}