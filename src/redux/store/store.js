import { configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "../slice/postSlice";




export const Store = configureStore({
    reducer: {
        posts: PostReducer 
    }
})