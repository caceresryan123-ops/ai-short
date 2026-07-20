import { supabase } from "./supabase";

export async function createProject(data: {
  prompt: string;
  style: string;
  duration: string;
  aspect_ratio: string;
  resolution: string;
}) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated");
  }

  const { data: project, error } = await supabase
    .from("projects")
    .insert({
      user_id: user.id,
      prompt: data.prompt,
      style: data.style,
      duration: data.duration,
      aspect_ratio: data.aspect_ratio,
      resolution: data.resolution,
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return project;
}