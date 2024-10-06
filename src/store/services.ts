
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../models/IUser.ts";


export const fetchUsers = createAsyncThunk<IUser[]>(
    'users/all',
    async () => {
        const res = await axios.get<IUser[]>('http://localhost:5000/api/v1/users/all');
        localStorage.setItem("users", JSON.stringify(res.data))
        return res.data;
    }
);

export const createUser = createAsyncThunk(
    'users/create',
    async (user:IUser) => {
        const users = JSON.parse(localStorage.getItem("users"))
        user.id = users[users.length - 1].id + 1
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        const res = await axios.post(
            'http://localhost:5000/api/v1/users/create',
            user);
        return user;
    }
);
