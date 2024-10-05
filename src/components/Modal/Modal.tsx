import classes from './Modal.module.scss'
import {ReactNode} from "react";

type Props = {
    children:ReactNode
}

export default function Modal({children}: Props) {
    return (
        <div className={classes.Modal}>
            {children}
        </div>
    )
}