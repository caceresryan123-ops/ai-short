interface VideoCardProps {
  title: string;
  status: string;
  date: string;
  videoUrl: string | null;
}


export default function VideoCard({
  title,
  status,
  date,
  videoUrl,
}: VideoCardProps) {


  return (

    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/50
        transition
        hover:border-zinc-700
      "
    >


      <div
        className="
          aspect-video
          w-full
          bg-zinc-800
        "
      >

        {videoUrl ? (

          <video
            src={videoUrl}
            controls
            className="
              h-full
              w-full
              object-cover
            "
          />

        ) : (

          <div
            className="
              flex
              h-full
              items-center
              justify-center
            "
          >
            <p className="text-sm text-zinc-500">
              Processing...
            </p>
          </div>

        )}

      </div>





      <div className="p-4">


        <h3
          className="
            truncate
            text-sm
            font-medium
            text-white
          "
        >
          {title}
        </h3>




        <div className="mt-3 flex items-center justify-between">


          <span
            className="
              rounded-full
              bg-zinc-800
              px-3
              py-1
              text-xs
              text-zinc-300
            "
          >
            {status}
          </span>



          <span className="text-xs text-zinc-500">
            {date}
          </span>


        </div>





        {videoUrl && (

          <a
            href={videoUrl}
            download
            className="
              mt-4
              block
              rounded-xl
              bg-white
              py-2
              text-center
              text-sm
              font-medium
              text-black
              hover:bg-zinc-200
            "
          >
            Download Video
          </a>

        )}



      </div>


    </div>

  );
}