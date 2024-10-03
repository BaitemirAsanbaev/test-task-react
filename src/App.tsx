import Header from "./components/Header/Header"
import UsersList from "./components/UsersList/UsersList.tsx";
import {Adjustment} from "./components/Adjustment/Adjustment.tsx";

function App() {
    return (
        <div>
            <Header title="Users list"/>
            <main>
                <Adjustment/>
                <UsersList/>
            </main>
        </div>
    )
}

export default App
