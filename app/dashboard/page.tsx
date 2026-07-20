import Welcome from "@/components/dashboard/Welcome";
import CreateCard from "@/components/dashboard/CreateCard";
import CreditsCard from "@/components/dashboard/CreditsCard";
import RecentVideos from "@/components/dashboard/RecentVideos";


export default function DashboardPage() {
  return (
    <div className="p-8">

      <Welcome />


      <div
        className="
          mt-8
          grid
          gap-6
          lg:grid-cols-3
        "
      >

        <div className="lg:col-span-2">

          <CreateCard />

        </div>


        <CreditsCard />

      </div>


      <RecentVideos />


    </div>
  );
}