
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "./models/IUser.ts";


export const fetchUsers = createAsyncThunk<IUser[]>(
    'users/all',
    async () => {
        const res = await axios.get<IUser[]>('http://localhost:5000/api/v1/users/all');
        localStorage.setItem("users", JSON.stringify(res.data))
        return res.data;
    }
);
