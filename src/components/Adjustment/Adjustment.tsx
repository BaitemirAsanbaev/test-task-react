import classes from './Adjustment.module.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export const Adjustment = () => {
    return <div className={classes.Adjustment}>
        <button>New user</button>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Sort"
                onChange={() => {
                    console.log("hui")
                }}
            >
                <MenuItem value={10}>age</MenuItem>
                <MenuItem value={20}>name</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="demo-simple-select-label">filter</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Sort"
                onChange={() => {
                    console.log("hui")
                }}
            >
                <MenuItem value={10}>old</MenuItem>
                <MenuItem value={20}>young</MenuItem>
                <MenuItem value={10}>admin</MenuItem>
                <MenuItem value={20}>user</MenuItem>
            </Select>
        </FormControl>
        <TextField id="filled-basic" label="Search" variant="filled"/>
        <button>Apply</button>
    </div>
}