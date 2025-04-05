import { useTheme } from "@/context/theme-provider"
import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"

const Header = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            className="h-14"
            src={theme === 'dark' ? "/public/logo.png" : "/public/logo2.png"}
            alt="climate logo"
          />
        </Link>
        <div>
          {/* search */}
          {/* toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`cursor-pointer transition-transform duration-300 ease-in-out ${isDark?'rotate-180':'rotate-0'}`}
          >
            {isDark ? (
              <Sun className="rotate-0 transform transition-transform duration-300 ease-in-out" size={24} />
            ) : (
              <Moon className="rotate-0 transform transition-transform duration-300 ease-in-out" size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header