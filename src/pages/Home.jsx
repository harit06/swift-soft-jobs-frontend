import React from "react"
import HomeNav from "./home/HomeNav"
import HomeBody from "./home/HomeBody"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <Navbar>
        <HomeNav />
      </Navbar>
      <HomeBody />
    </>
  )
}

export default Home
