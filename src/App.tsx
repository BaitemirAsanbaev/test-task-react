import Header from "./components/Header/Header"
import UsersList from "./components/UsersList/UsersList.tsx";
import {Adjustment} from "./components/Adjustment/Adjustment.tsx";
import Modal from "./components/Modal/Modal.tsx";
import Backdrop from "./components/Modal/Backdrop.tsx";
import {useAppSelector} from "./store/hooks.ts";

function App() {
    const {createWindow, userWindow} = useAppSelector(state => state.modal)
    console.log(createWindow, userWindow)
    return (
        <div>
            {createWindow.isOpened&&<Modal><div>create user</div></Modal>}
            {userWindow.isOpened&&<Modal><div>user info</div></Modal>}
            {createWindow.isOpened&&<Backdrop/>}
            {userWindow.isOpened&&<Backdrop/>}
            <Header title="Users list"/>
            <main>
                <Adjustment/>
                <UsersList/>
            </main>
        </div>
    )
}

export default App
