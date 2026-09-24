import { forwardRef } from "react";
import {navbarLinks} from "../constants/index"
import { cn } from "../utils/cn";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

interface SidebarProps{
  collapsed: boolean
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(({collapsed}, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-100 flex h-full w-60 flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:width_300ms_cubic-bezier(0.4,0,0.2,1),background-color_150ms_cubic-bezier(0.4,0,0.2,1),border_150ms_cubic-bezier(0.4,0,0.2,1)] dark:border-slate-700 dark:bg-slate-900",
         collapsed ? "md:w-17.5 md:items-center" : "md:w-60",
         collapsed? "max-md:-left-full" : "max-md:left-0"
      )}>
      <div className="flex gap-x-3 p-3">
        <img src={logo} alt="Logo" />
        {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
          Logoiosum
          </p>}
      </div>
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 scrollbar-thin">
          {
            navbarLinks.map((navbarLink) => (
              <nav 
              key={navbarLink.title}
              className={cn("sidebar-group")}
              >
                <p className={cn("sidebar-group-title")}>
                  {navbarLink.title}
                </p>
                {
                  navbarLink.links.map((link) =>(
                    <NavLink 
                    key={link.label}
                    to={link.path}
                    className={cn("sidebar-item")}>
                      <link.icon
                      size={22}
                      className="shrink-0"
                      />
                      {
                        !collapsed && <p className="whitespace-nowrap">
                          {
                            link.label
                          }
                        </p>
                      }
                    </NavLink>
                  ))
                }
              </nav>
            ))
          }
      </div>
    </aside>
  );
});

export default Sidebar;

Sidebar.displayName = "SideBar";
