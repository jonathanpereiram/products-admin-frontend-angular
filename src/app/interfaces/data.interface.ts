export interface DataObject<T> {
    data: T
}

export interface DataItems<T> {
    data: {
        page: string,
        limit: string,
        countDocuments: number
        items: T[]
    }
}