import { atom } from "recoil";

export const isGlobalMenuShow = atom({
    key: "isGlobalMenuShow",
    default: false
})

export const selectedCategory = atom({
    key: "selectedCategory",
    default: "all"
})