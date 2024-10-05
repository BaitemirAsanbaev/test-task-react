import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from "../../models/IUser.ts";



type ModalState = {
    createWindow:{
        isOpened:boolean,
    },
    userWindow:{
        isOpened:boolean,
        user:IUser|null
    }
};

const initialState: ModalState = {
    createWindow:{
        isOpened:false
    },
    userWindow:{
        isOpened:false,
        user:null
    }
};



export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleCreateWindow:(state:ModalState)=>{
            state.createWindow.isOpened = !state.createWindow.isOpened
        },
        toggleUserWindow:(state:ModalState, action:PayloadAction<IUser|null>)=>{
            state.userWindow.isOpened = !state.userWindow.isOpened
            state.userWindow.user = action.payload
        }
    }
});



export const modalReducer = modalSlice.reducer;

export const { toggleCreateWindow, toggleUserWindow } = modalSlice.actions
