import classes from './UsersList.module.scss'
import UserCard from "../UserCard/UserCard.tsx";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {useEffect} from "react";
import {fetchUsers} from "../../services.ts";

export default function UsersList() {

    const dispatch= useAppDispatch()
    const {users, loading, error} = useAppSelector(state => state.users);

    useEffect(() => {

        dispatch(fetchUsers())
        }, [dispatch])
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className={classes.UsersList}>
            {users.map((user) => {
                return <div key={user.id}>
                    <UserCard user={user}/>
                </div>
            })}
        </div>
    )
}