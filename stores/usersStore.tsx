import create from "zustand";
import  { UsersStoreInterface } from "../types"

const usersStore = create<UsersStoreInterface>((set, get) => ({
    isLoading: false,
    user: null,
    getUser: async (userId: string | number) => {
        // const response = await fetch(pond)
        // set({ fishies: await response.json() })
        set(state => ({user: {Id: 1, Name: "Name", LastName: "LastName", Email: "miguel@test.com", Image: "https://picsum.photos/id/1027/48"}}));
    }
}))

export default usersStore;