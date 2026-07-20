import { fal } from "@/lib/fal";

export async function generateVideo(prompt: string) {

  const result = await fal.subscribe(
    "fal-ai/minimax/hailuo-02/standard/text-to-video",
    {
      input: {
        prompt,
      },
    }
  );


  console.log(
    "FAL RESULT:",
    JSON.stringify(result, null, 2)
  );


  return result;

}