import React from 'react'
import { SLayout, SMain } from './styles'
import SideBar from '../sidebar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <SLayout>
      <SideBar/>
      <SMain>
        <Outlet/>
      </SMain>
      
    </SLayout>
  ) 
}
