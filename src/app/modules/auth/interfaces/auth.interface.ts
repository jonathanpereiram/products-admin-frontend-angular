export interface Auth {
    data: AuthData;
}

interface AuthData {
    name: string;
    email: string;
    uid: string;
    token?: string;
}
