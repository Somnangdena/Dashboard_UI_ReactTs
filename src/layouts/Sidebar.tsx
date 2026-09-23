import { forwardRef } from "react";

Sidebar.displayName = "SideBar"

const Sidebar = forwardRef(({}, ref) => {
  return (
    <aside 
    ref={ref}
    className="fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,)]"
    >Sidebar</aside>
  )
})

export default Sidebar