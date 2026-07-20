import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarPlan from "./SidebarPlan";
import SidebarFooter from "./SidebarFooter";


export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-screen
        w-72
        flex-col
        border-r
        border-zinc-800
        bg-zinc-950
      "
    >

      <SidebarHeader />


      <SidebarNav />


      <SidebarPlan />


      <SidebarFooter />

    </aside>
  );
}