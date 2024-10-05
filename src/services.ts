// services.ts (or the file where you define your thunk)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "./models/IUser.ts";

// Define the fetchUsers thunk with explicit types
export const fetchUsers = createAsyncThunk<IUser[]>(
    'users/all',
    async () => {
        const res = await axios.get<IUser[]>('http://localhost:5000/api/v1/users/all');
        return res.data;
    }
);
