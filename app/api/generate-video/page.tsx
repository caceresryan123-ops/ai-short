import { createClient } from "@/lib/supabase/server";


export default async function MyVideosPage() {


  const supabase = await createClient();



  const {
    data: videos,
    error
  } = await supabase
    .from("projects")
    .select("*")
    .not(
      "video_url",
      "is",
      null
    )
    .order(
      "created_at",
      {
        ascending:false
      }
    );




  if(error){

    console.error(error);

  }




  return (

    <div className="p-8">


      <h1 className="text-4xl font-bold text-white mb-8">
        My Videos
      </h1>



      {
        !videos || videos.length === 0 ? (

          <div className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            p-8
            text-zinc-400
          ">
            No videos generated yet.
          </div>

        ) : (


          <div className="
            grid
            gap-8
            md:grid-cols-3
          ">


            {
              videos.map((video)=>(

                <div
                  key={video.id}
                  className="
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-4
                  "
                >


                  <video
                    src={video.video_url}
                    controls
                    className="
                      w-full
                      rounded-2xl
                      aspect-[9/16]
                      object-cover
                    "
                  />



                  <p className="
                    mt-4
                    text-sm
                    text-zinc-400
                  ">
                    {video.prompt}
                  </p>


                </div>

              ))
            }


          </div>


        )

      }


    </div>

  );

}