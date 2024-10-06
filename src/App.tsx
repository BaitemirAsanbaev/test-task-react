import Header from "./components/Header/Header"
import UsersList from "./components/UsersList/UsersList.tsx";
import {Adjustment} from "./components/Adjustment/Adjustment.tsx";
import Modal from "./components/Modal/Modal.tsx";
import Backdrop from "./components/Modal/Backdrop.tsx";
import {useAppSelector} from "./store/hooks.ts";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm.tsx";
import UserInfo from "./components/UserInfo/UserInfo.tsx";

function App() {
    const {createWindow, userWindow} = useAppSelector(state => state.modal)
    return (
        <div>
            {createWindow.isOpened&&<Modal><CreateUserForm/></Modal>}
            {userWindow.isOpened&&<Modal><UserInfo user={userWindow.user}/></Modal>}
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
