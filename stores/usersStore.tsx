import create, { SetState, GetState } from "zustand";
import  { UsersStoreInterface } from "../types"

export default create((setState: SetState<UsersStoreInterface>, getState: GetState<UsersStoreInterface>): UsersStoreInterface => {
    return {
        isLoading: false,
        user: null,
        getUser: async (userId: string | number) => {
            alert("test get user");
        }
    }
})