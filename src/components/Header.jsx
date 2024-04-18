import { useState, useEffect } from "react"
import { IconMoon, IconSun } from "./icons"

const Header = () => {

  const [darkMode, setdarkMode] = useState(false)

  useEffect(() => {
      if (darkMode) {
          document.documentElement.classList.add('dark')
      } else {
          document.documentElement.classList.remove('dark')
      }

  }, [darkMode])



  return (
      <header className="flex justify-between py-8" >
          <h1 className="text-white tracking-[0.2em] font-semibold uppercase text-2xl" >
              {`Task manager`}
          </h1>
          <button onClick={() => setdarkMode(!darkMode)} className="text-xl">
              {!darkMode ?
                  (
                      <IconMoon  />
                  ) : (
                      <IconSun  />
                  )

              }
          </button>
      </header>
  )
}

export default Header;