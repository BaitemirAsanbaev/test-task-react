import classes from './Modal.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {toggleCreateWindow, toggleUserWindow} from "../../store/slices/modalSlice.ts";


export default function Backdrop() {
    const {createWindow, userWindow} = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch()
    return (
        <div
            onClick={() => {
                if (createWindow.isOpened) {
                    dispatch(toggleCreateWindow())
                    console.log(createWindow.isOpened)
                }
                if (userWindow.isOpened) {
                    dispatch(toggleUserWindow(null))
                }
            }}
            className={classes.Backdrop}>
        </div>
    )
}