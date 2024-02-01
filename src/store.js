import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./components/slices/taskSlice"

export const store=configureStore({
    reducer:{
tasks:tasksReducer
    }
})
export default store