"use client";

import { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { supabase } from "@/lib/supabase/client";


interface Project {
  id: string;
  prompt: string;
  status: string;
  created_at: string;
  video_url: string | null;
}



export default function RecentVideos() {


  const [videos, setVideos] = useState<Project[]>([]);



  useEffect(() => {


    async function loadProjects() {


      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();



      if (!user) return;



      const {
        data,
        error
      } = await supabase
        .from("projects")
        .select(
          "id,prompt,status,created_at,video_url"
        )
        .eq(
          "user_id",
          user.id
        )
        .order(
          "created_at",
          {
            ascending: false
          }
        )
        .limit(6);



      if (error) {

        console.error(error);
        return;

      }



      setVideos(data || []);


    }



    loadProjects();


  }, []);





  return (

    <section className="mt-8">


      <div className="mb-5 flex items-center justify-between">


        <h2 className="text-xl font-semibold text-white">
          Recent Videos
        </h2>



        <button
          className="
            text-sm
            text-zinc-400
            transition
            hover:text-white
          "
        >
          View All
        </button>


      </div>





      <div
        className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >



        {videos.length === 0 && (

          <p className="text-zinc-500">
            No videos created yet.
          </p>

        )}





        {videos.map((video) => (


          <VideoCard

            key={video.id}

            title={video.prompt}

            status={video.status}

            date={
              new Date(video.created_at)
              .toLocaleDateString()
            }

            videoUrl={video.video_url}

          />


        ))}



      </div>


    </section>

  );

}