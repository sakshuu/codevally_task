import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const addTask = createAsyncThunk("task/addTask", async taskData => {
    try {
        const {data} = await axios.post("http://localhost:5000/Task/add", taskData) 
        return data.result
    } catch (error) {
        return error.message
    }
})

export const showTask =  createAsyncThunk("task/getTask", async taskData => {
    try {
        const {data} = await axios.get("http://localhost:5000/Task", taskData)
        console.log("heelo");
        // console.log(data.result);
        return data.result
    } catch (error) {
        return error.message
    }
})


export const DeleteTask = createAsyncThunk("task/deleteTask", async taskId => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/Task/${taskId}`, taskId)
        return data.result
    } catch (error) {
        return error.message
    }
})

export const updateTask = createAsyncThunk("task/updateTask", async ({values , id})  => {
    try {
        console.log(values , id);
        const {data} = await axios.put(`http://localhost:5000/Task/${id}`,values) 
        return data.result
    } catch (error) {
        return error.message
    }
})

