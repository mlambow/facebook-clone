import Login from "./components/Login"
import Feed from "./components/Feed"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Widget from "./components/Widget"
import { useStateValue } from "../AuthContext"


function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="overflow-hidden">
      {!user ?
        <Login /> 
        :
        <>
          <Header />

          <main className="flex">
            <SideBar />
            <Feed />
            <Widget />
          </main>
        </>
      }

    </div>
  )
}

export default App
