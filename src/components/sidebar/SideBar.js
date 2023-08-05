import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, STheme, SThemeLabel, SThemeToggler, SToggleThumb, SidebarButton } from './styles'
import {BiLogoNodejs, BiSearch, BiLogoGithub, BiLogoMongodb, BiLogoReact, BiLogoPostgresql, BiLogoDocker, BiLogoJavascript} from 'react-icons/bi'
import {AiOutlineLeft} from 'react-icons/ai'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'

export default function SideBar() {
  const searchRef = useRef(null)
  const {theme, setTheme} = useContext(ThemeContext)

  const {pathname} = useLocation()
  const [sideBarOpen, setSidebarOpen] = useState(false)

  const searchClickHandler = ()=>{
    if(!sideBarOpen){
      setSidebarOpen(true)
      // focus on input
      searchRef.current.focus()
    }else{

    }
  }
  return (
   <SSidebar isOpen={sideBarOpen}>

    <>
      <SidebarButton isOpen={sideBarOpen} onClick={()=> setSidebarOpen(p => !p)}>
        <AiOutlineLeft/>
      </SidebarButton>
    </>
    <SLogo>
      <BiLogoNodejs/>
    </SLogo>
    <SSearch onClick={searchClickHandler} style={!sideBarOpen ? {width:`fit-content`} : {}}>
      <SSearchIcon >
        <BiSearch/>
      </SSearchIcon>
      <input ref={searchRef} placeholder='Search' style={!sideBarOpen ? {width:0, padding: 0} : {}}/>
    </SSearch>

    <SDivider/>
    {linkS.map(({to, notifications, label, icon})=> (
      <SLinkContainer key={label} isActive={pathname === to}>
      <SLink to={to} style={!sideBarOpen ? {width:`fit-content`,} : {}}>
        <SLinkIcon>{icon}</SLinkIcon>
        {
          sideBarOpen && (
            <>
            <SLinkLabel>{label}</SLinkLabel>
        {/* If notifications are at 0 or null, do not display */}
        {!!notifications && (<SLinkNotification>{notifications}</SLinkNotification>)}
            </>
          )
        }
        
      </SLink>
    </SLinkContainer>
    ))}

    <SDivider/>
      {
        secondaryLinks.map(({icon, label})=> (
          <SLinkContainer key={label}>
            <SLink style={!sideBarOpen ? {width:`fit-content`,} : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sideBarOpen && <SLinkLabel>{label}</SLinkLabel>}
            </SLink>
          </SLinkContainer>
        ))
      }

      <SDivider/>
      <STheme>
        {sideBarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler isActive={theme === "dark"} onClick={()=> setTheme((p) => p === 'light' ? "dark" : "light" )}>
          <SToggleThumb style={theme === 'dark' ? {right: "1px"} : {}}/>
        </SThemeToggler>
      </STheme>
   </SSidebar>
  )
}


const linkS = [
  {
    label: "Home",
    icon: <BiLogoGithub/>,
    to: '/',
    notifications: 0
  },
  {
    label: "Statistics",
    icon: <BiLogoMongodb/>,
    to: '/statistics',
    notifications: 1
  },
  {
    label: "Delivery",
    icon: <BiLogoReact/>,
    to: '/delivery',
    notifications: 0
  },
  {
    label: "Products",
    icon: <BiLogoPostgresql/>,
    to: '/products',
    notifications: 2
  },
]

const secondaryLinks = [
  {
    label: "Settings",
    icon: <BiLogoDocker/>
  },
  {
    label: "Logout",
    icon: <BiLogoJavascript/>
  },
]