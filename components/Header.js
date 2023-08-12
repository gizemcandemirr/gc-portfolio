import React from 'react'
import {useTheme} from "next-themes"
const Header = () => {
  const {theme, setTheme} = useTheme();
  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
    <span></span>
    <button className={`px-6 py-2 bg-blue-300 rounded-md font-semibold uppercase ${theme === "light" && "text-black"}`}
     onClick={() => setTheme(theme=== "dark" ? "light" : "dark")}> {theme=== "light" ? "Dark" : "Light"}</button>
    </header>
  )
}

export default Header
