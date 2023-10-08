import { createSlice } from "@reduxjs/toolkit";
import { DeleteTask, addTask, showTask } from "../action/taskAction";

const taskSlice =  createSlice({
    name:"task",
    initialState: { tasks: [], loading: false},
    reducers: {},
    extraReducers(builder){                              
        builder

        .addCase(addTask.pending , (state, {payload}) => {
            state.loading = false;
        })  
        .addCase(addTask.fulfilled , (state, {payload}) => {
            state.loading = false;
            state.taskAdd = true;
            state.toggle = !state.toggle
        })  
        .addCase(addTask.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload
        })


        .addCase(showTask.pending, (state, {payload}) =>{
            state.loading = true
        })    
        .addCase(showTask.fulfilled, (state, {payload}) => {
            state.loading = false; 
            state.tasks = payload;
            // state.toggle = !state.toggle
        })   
        .addCase(showTask.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })    

        .addCase(DeleteTask.pending, (state, {payload}) =>{
            state.loading = true
        })    
        .addCase(DeleteTask.fulfilled, (state, {payload}) => {
            state.loading = false; 
            state.deletetasks = true;
            state.toggle = !state.toggle
        })   
        .addCase(DeleteTask.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })    

       
    }})

export default taskSlice.reducer