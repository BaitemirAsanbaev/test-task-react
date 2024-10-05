export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR',
    GUEST = 'GUEST'
}

export interface IUser{
    role: string;
    address: string;
    phone: string;
    name: string;
    verified: boolean;
    id: number;
    avatar: string;
    email: string;
    age: number;
    username: string
}