import Header from "./components/Header/Header"
import UserCard from "./components/UserCard/UserCard.tsx";

function App() {
  return (
   <div>
    <Header title="Users list"/>
    <UserCard user={{
        id:1,
        name:"John",
        username:"johnny521",
        address:"manas str 202",
        phone:"0 999 888 999",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gg_D8uFRFRFiSilx1eTouqbrEpxHPKpOgg&s"
    }
    }/>
   </div>
  )
}

export default App
