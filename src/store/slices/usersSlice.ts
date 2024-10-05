import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IUser} from "../../models/IUser.ts";
import {fetchUsers} from '../../services.ts'


type UsersState = {
    users: IUser[],
    loading: boolean,
    error: string | null
};

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        sortByAge: (state: UsersState, action:PayloadAction<string>) => {
            state.users = [...state.users].sort((a, b) => {
                if (action.payload === "upwards") return a.age - b.age
                if (action.payload === "downwards") return b.age - a.age
            });
            console.log("sorted by age")
        },
        sortByName: (state: UsersState, action:PayloadAction<string>)=>{
            state.users = [...state.users].sort((a, b)=>{
                if (action.payload === "downwards") return a.name.localeCompare(b.name)
                if (action.payload === "upwards") return b.name.localeCompare(a.name)
            })
            console.log("sorted by name")
        },
        filterByRole:(state: UsersState, action:PayloadAction<string>)=>{
            state.users = JSON.parse(localStorage.getItem("users"))
            state.users = state.users.filter((user)=>user.role === action.payload)
            console.log("filtered by role")
        },
        filterByVerification:(state: UsersState)=>{
            state.users = JSON.parse(localStorage.getItem("users"))
            state.users = state.users.filter((user)=>user.verified)
            console.log("filtered by ver")
        },
        search:(state:UsersState, action:PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();

            state.users = state.users.filter((user) => {
                return (
                    user.name.toLowerCase().includes(searchTerm) ||
                    user.username.toLowerCase().includes(searchTerm) ||
                    user.email.toLowerCase().includes(searchTerm) ||
                    user.address.toLowerCase().includes(searchTerm)
                );
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state:UsersState) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchUsers.fulfilled, (state:UsersState, action:PayloadAction<IUser[]>) => {
            state.loading = false
            state.users = action.payload;
        });

        builder.addCase(fetchUsers.rejected, (state:UsersState, action: unknown)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users';
        });
    }
});



export const usersReducer = userSlice.reducer;

export const {sortByAge, sortByName, filterByRole, filterByVerification, search} = userSlice.actions

export const selectUsers = (state: RootState) => state.users;