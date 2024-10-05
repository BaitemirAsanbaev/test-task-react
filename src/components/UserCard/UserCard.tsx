import classes from './UserCard.module.scss'
import {IUser} from "../../models/IUser.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {toggleUserWindow} from "../../store/slices/modalSlice.ts";

type Props = {
    user: IUser
}

export default function UserCard({user}: Props) {
    const dispatch = useAppDispatch()
    const {name, username, phone, avatar} = user
    return (
        <div className={classes.UserCard}>
            <div>
                <span className={classes.name}>{name}</span>
                <span className={classes.username}>@{username}</span>
                <span className={classes.phone}>{phone}</span>
                <button onClick={() => dispatch(toggleUserWindow(user))}>Open</button>
            </div>
            <div>
                <img src={avatar} alt='avatar'/>
            </div>
        </div>
    )
}