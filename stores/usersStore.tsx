import create, { State } from "zustand";
import  { UsersStoreInterface } from "../types"

const usersStore = create<UsersStoreInterface>((set, get) => ({
    isLoading: false,
    user: null,
    getUser: async (userId: string | number) => {
        // const response = await fetch(pond)
        // set({ fishies: await response.json() })
        console.log("test get user");
        console.log(get().user);
        set(state => ({user: {Id: 1, Name: "Miguel", LastName: "Rodriguez", Email: "miguel@test.com", Image: "https://picsum.photos/id/1027/48"}}));
        console.log(get().user);
    }
}))

export default usersStore;