
export type User = {
    Id: number;
    Name: string;
    LastName: string;
    Email: string;
    Image: string;    
}

export type UsersStoreInterface = {
    isLoading: boolean;
    user?: User;
    getUser: (userId: string | number) => void;
}