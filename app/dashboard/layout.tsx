import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950">

      <Sidebar />


      <div className="flex flex-1 flex-col">


        <Navbar />


        <main className="flex-1 overflow-y-auto">

          {children}

        </main>


      </div>

    </div>
  );
}