import { fal } from "./fal";

export async function generateVideo(prompt: string) {
  const result = await fal.subscribe(
    "fal-ai/minimax/hailuo-02/standard/text-to-video",
    {
      input: {
        prompt,
      },
    }
  );

  return result;
}