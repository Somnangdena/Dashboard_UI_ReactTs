import { Outlet } from "react-router-dom";
import {useMediaQuery} from "@uidotdev/usehooks"
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { cn } from "../utils/cn";
import { useRef, useState } from "react";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)")
  const [collapsed, setCollapsed] = useState(true);

  const sidebaeRef = useRef(null)
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900">
      <div
      className={cn("pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
        !collapsed && "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30"
      )}
      />
        <Sidebar 
        ref={sidebaeRef} 
        collapsed = {collapsed}
        />
        <div className={cn("transition-[margin] duration-300",
          collapsed ? "md:ml-17.5" : "md:ml-60"
        )}>
            <Header/>
            <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout