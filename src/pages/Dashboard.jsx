import React from "react"
import Navbar from "../components/Navbar"
import DashboardNav from "./dashboard/DashboardNav"
export default function Dashboard() {
  return (
    <>
      <Navbar>
        <DashboardNav />
      </Navbar>

      <div className="relative">
        <h1>Dashboard </h1>
      </div>
    </>
  )
}
