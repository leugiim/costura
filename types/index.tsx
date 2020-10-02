
export interface User {
    Id: number;
    Name: string;
    LastName: string;
    Email: string;
    Image: string;    
}

export interface UsersStoreInterface {
    isLoading: boolean;
    user?: User;
    getUser: (userId: string | number) => void;
}