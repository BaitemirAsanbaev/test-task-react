import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IUser} from "../../models/IUser.ts";
import {fetchUsers} from '../../services.ts'


type UsersState = {
    users: IUser[],
    loading: boolean,
    error: string | null
};

// Define the initial state using that type
const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        test:()=>{

        }
    },
    extraReducers: (builder) => {
        // Handle the 'pending' state (when the request is in progress)
        builder.addCase(fetchUsers.pending, (state:UsersState) => {
            state.loading = true;
            state.error = null;
        });

        // Handle the 'fulfilled' state (when the request is successful)
        builder.addCase(fetchUsers.fulfilled, (state:UsersState, action:PayloadAction<IUser[]>) => {
            state.loading = false;
            console.log(action.payload)
            state.users = action.payload; // Update the state with the fetched users
        });

        // Handle the 'rejected' state (if the request fails)
        builder.addCase(fetchUsers.rejected, (state:UsersState, action: unknown)=>{
            state.error = action.error.message || 'Failed to fetch users';
        });
    }
});



export const usersReducer = userSlice.reducer;

export const selectUsers = (state: RootState) => state.users;