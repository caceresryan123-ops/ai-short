"use client";

import { useEffect, useState } from "react";

import VideoCard from "@/components/dashboard/VideoCard";

import { supabase } from "@/lib/supabase/client";


interface Project {
  id: string;
  prompt: string;
  status: string;
  created_at: string;
  video_url: string | null;
}



export default function VideosPage() {


  const [videos, setVideos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    async function loadVideos() {


      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();



      if (!user) {

        setLoading(false);
        return;

      }



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
        );



      if (error) {

        console.error(error);

        setLoading(false);

        return;

      }



      setVideos(data || []);

      setLoading(false);


    }



    loadVideos();


  }, []);





  return (

    <div className="p-8">


      <div className="mb-10">


        <h1 className="text-4xl font-bold text-white">
          My Videos
        </h1>


        <p className="mt-3 text-zinc-400">
          Manage all your generated AI videos.
        </p>


      </div>





      {loading && (

        <p className="text-zinc-500">
          Loading videos...
        </p>

      )}






      {!loading && videos.length === 0 && (

        <p className="text-zinc-500">
          You haven't created any videos yet.
        </p>

      )}






      <div
        className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >


        {videos.map((video) => (


          <VideoCard

            key={video.id}

            title={video.prompt}

            status={
              video.status === "pending"
                ? "Processing"
                : video.status
            }

            date={
              new Date(video.created_at)
              .toLocaleDateString()
            }

            videoUrl={video.video_url}

          />


        ))}


      </div>


    </div>

  );

}