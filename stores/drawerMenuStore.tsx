import create from "zustand";
import  { DrawerMenuInterface } from "../types"

const usersStore = create<DrawerMenuInterface>((set, get) => ({
    showDrawer: false,
    toggleMenu: () => set(state => ({showDrawer: !get().showDrawer})),
    active: "",
    setActive: (value: string) => set(state => ({active: value}))
}))

export default usersStore;