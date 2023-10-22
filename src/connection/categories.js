import { createSlice,  createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getCategories = createAsyncThunk('products/categories', async () => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/categories');
        const data = response.data;
        return  data ;
    } catch(error) {
        throw error;
    }
})


const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: {
        error: null,
        categories: [],
        loading: false, 
    },
    reducers: {

    },

    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loading = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = action.payload 
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})




export default categoriesSlice.reducer