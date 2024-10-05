import classes from './UserCard.module.scss'
import {IUser} from "../../models/IUser.ts";

type Props = {
    user: IUser
}

export default function UserCard({user}: Props) {
    const {id, name, username, address, phone, avatar, age, role} = user
    return (
        <div className={classes.UserCard}>
            <div>
                <span className={classes.name}>{name}</span>
                <span className={classes.username}>@{username}</span>
                <span className={classes.username}>{age}</span>
                <span className={classes.username}>{role}</span>
                <span className={classes.address}>{address}</span>
                <span className={classes.phone}>{phone}</span>
                <button onClick={() => console.log(id)}>Open</button>
            </div>
            <div>
                <img src={avatar} alt='avatar'/>
            </div>
        </div>
    )
}