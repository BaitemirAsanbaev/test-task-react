import classes from './UsersList.module.scss'
import {IUser} from "../../models/IUser.ts";
import UserCard from "../UserCard/UserCard.tsx";

export default function UsersList() {
    const temp_data:IUser[] = [
        {
            id: 1,
            name: "John",
            username: "johnny521",
            address: "manas str 202",
            phone: "0 999 888 999",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
        },
        {
            id: 2,
            name: "Alice",
            username: "alice_wonder",
            address: "elm st 101",
            phone: "0 777 666 555",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
        },
        {
            id: 3,
            name: "Bob",
            username: "bobby1987",
            address: "main ave 53",
            phone: "0 555 444 333",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
        },
        {
            id: 4,
            name: "Clara",
            username: "clarabella",
            address: "parkway blvd 24",
            phone: "0 333 222 111",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
        },
        {
            id: 5,
            name: "David",
            username: "daveyboy",
            address: "oak st 5",
            phone: "0 111 000 999",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
        }
    ];

    return (
        <div className={classes.UsersList}>
            {temp_data.map((user)=>{
                return <div key={user.id}>
                    <UserCard  user={user}/>
                </div>
            })}
        </div>
    )
}