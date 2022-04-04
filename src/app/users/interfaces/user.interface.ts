export interface UserRoot {
    data: DataUser;
}

export interface DataUser {
    page: string;
    limit: String;
    countDocuments: number;
    items: User[];
}

export interface User {
    uid: string;
    email: string;
    name: string;
}