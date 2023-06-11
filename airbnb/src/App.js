import React from "react"
import Navbar from "./components/Navbar"
import NavbarProps from "./components/NavbarProps"
import StatefulGreeting from "./components/StatefulGreeting"
import NavBarSimple from "./components/NavBarSimple"

function App() {
  return (
    <div>
      <Navbar/>
      <NavbarProps logo="flucent developer" navigation="list of nav elements"/>
      <StatefulGreeting greeting="Good morning to you sweetheart!" />
      <NavBarSimple />
    </div>
  )
}

export default App;