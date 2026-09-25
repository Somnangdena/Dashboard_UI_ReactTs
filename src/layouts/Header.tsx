import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import profile from "../assets/profile.png"
import { useTheme } from "../hooks/UseTheme";

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  const {theme, setTheme} = useTheme();
  return (
    <header className="relative h-15 z-10 flex items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn-ghost size-10">
          <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
        </button>
        <div className="input">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"/>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button 
        onClick={() =>{
          setTheme(theme === "light" ? "dark" : "light")
        }}
        className="btn-ghost size-10">
          <Sun 
          className="dark:hidden"
          size={20}/>
          <Moon 
          className="hidden dark:block"
          size={20} />
        </button>
        <button className="btn-ghost size-10">
            <Bell size={20}/>
        </button>
        <button className="size-10 overflow-hidden rounded-full">
          <img 
          className="size-full object-cover"
          src={profile} 
          alt="Profile" />
        </button>
      </div>
    </header>
  );
};

export default Header;
