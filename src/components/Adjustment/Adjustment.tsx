import classes from './Adjustment.module.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {
    filterByRole,
    filterByVerification,
    reset,
    search,
    sortByAge,
    sortByName
} from "../../store/slices/usersSlice.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {toggleCreateWindow} from "../../store/slices/modalSlice.ts";

export const Adjustment = () => {
    const [sort, setSort] = useState<string>("*")
    const [filter, setFilter] = useState<string>("*")
    const [target, setTarget] = useState<string>("")
    const dispatch = useAppDispatch()
    function applySettings(){

        switch (filter){
            case "a":
                dispatch(filterByRole("ADMIN"))
                break
            case "g":
                dispatch(filterByRole("GUEST"))
                break
            case "u":
                dispatch(filterByRole("USER"))
                break
            case "v":
                dispatch(filterByVerification())
                break
            default:
                dispatch(reset())
                break
        }
        switch (sort){
            case "n_d":
                dispatch(sortByName("downwards"))
                break
            case "n_u":
                dispatch(sortByName("upwards"))
                break
            case "a_d":
                dispatch(sortByAge("downwards"))
                break
            case "a_u":
                dispatch(sortByAge("upwards"))
                break
            default:
                dispatch(reset())
                break
        }

    }
    return <div className={classes.Adjustment}>
        <button onClick={()=>dispatch(toggleCreateWindow())}>New user</button>
        <FormControl>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
                labelId="sort-label"
                id="sort"
                value={sort}
                label="Sort"
                onChange={(e) => {
                    setSort(e.target.value.toString())
                }}
            >
                <MenuItem value={"*"}>Default</MenuItem>
                <MenuItem value={"n_d"}>Name (A-Z)</MenuItem>
                <MenuItem value={"n_u"}>Name (Z-A)</MenuItem>
                <MenuItem value={"a_d"}>Age (oldest first)</MenuItem>
                <MenuItem value={"a_u"}>Age (youngest first)</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
                labelId="filter-label"
                id="filter"
                value={filter}
                label="Filter"
                onChange={(e) => {
                    setFilter(e.target.value.toString())
                }}
            >
                <MenuItem value={"*"}>All</MenuItem>
                <MenuItem value={"a"}>Admins only</MenuItem>
                <MenuItem value={"g"}>Guests only</MenuItem>
                <MenuItem value={"u"}>Users only</MenuItem>
                <MenuItem value={"v"}>Verified only</MenuItem>
            </Select>
        </FormControl>
        <button onClick={applySettings}>Apply</button>

        <TextField id="filled-basic" value={target} onChange={(e)=>setTarget(e.target.value)} label="Search" variant="filled"/>
        <button onClick={()=>dispatch(search(target))}>Search</button>
    </div>
}