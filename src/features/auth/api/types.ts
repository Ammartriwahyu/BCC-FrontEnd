export interface User {
    id: string;
    email: string;
    username: string;
    roles: string[];
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}