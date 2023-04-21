import { ApiURL } from "../../utils/apiUrl"
import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    loading: false,
    error: null
}


export const fetchPosts = createAsyncThunk('posts/fetchPost', 
async (payload, {rejectWithValue, getState, dispatch})=>{
    try{
        const response = await axios.get(ApiURL)
        return response.data
    } catch(err){
        return rejectWithValue(err.response.status)
    }
})

export const searchPost = createAsyncThunk('posts/searchPost', 
async (id, {rejectWithValue, getState, dispatch})=>{
    try{
        const response = await axios.get(`${ApiURL}/${id}`)
        return response.data
    } catch(err){
        return rejectWithValue(err.response.status)
    }
})
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) =>{
        // fetching posts

        builder.addCase(fetchPosts.pending, (state, action) =>{
            state.loading = true
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) =>{
            state.loading = false
            state.posts = action.payload
        })

        builder.addCase(fetchPosts.rejected, (state, action) =>{
            state.posts = []
            state.loading = false
            state.error = action.payload
        })

        // search a single post

        builder.addCase(searchPost.pending, (state, action) =>{
            state.loading = true
        })

        builder.addCase(searchPost.fulfilled, (state, action) =>{
            state.loading = false
            state.posts = [action.payload]
        })

        builder.addCase(searchPost.rejected, (state, action) =>{
            state.posts = []
            state.loading = false
            state.error = action.payload
        })
    }
})

export const PostReducer = postsSlice.reducer
