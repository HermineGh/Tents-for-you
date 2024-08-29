import supabase, { supabaseUrl } from "./supabase";

export async function getTents() {
  let { data, error } = await supabase.from("tents").select("*");

  if (error) throw new Error("Tents couldn't be loaded");
  return data;
}

/*
// only for creating a tent
export async function createTent(newTent) {
  //create image path
  const imgName = `${Math.round(Math.random() * 10000000)}-${
    newTent.image.name
  }`.replaceAll("/", "-");

  const imgPath = `${supabaseUrl}/storage/v1/object/public/tents-images/${imgName}`;

  //create tent
  const { data, error } = await supabase
    .from("tents")
    .insert([{ ...newTent, image: imgPath }])
    .select();

  if (error) throw new Error("Tent couldn't be created");

  //upload image
  const { error: storageErr } = await supabase.storage
    .from("tents-images")
    .upload(imgName, newTent.image);
  if (storageErr) throw new Error("Tent couldn't be uploaded");

  // delete tent if something went wrong uploading an image
  if (storageErr) {
    await supabase.storage.from("tents").delete().eq("id", data.id);

    throw new Error("Image could't be uploaded & tent couldn't be created");
  }
  return data;
}
*/

//  for creating or editing a tent Tow operation in one function
export async function createEditTent(newTent, id) {
  const imgPathWithSupabase = newTent.image?.startsWith?.(supabaseUrl);

  //create image path
  const imgName = `${Math.round(Math.random() * 10000000)}-${
    newTent.image.name
  }`.replaceAll("/", "-");

  const imgPath = imgPathWithSupabase
    ? `${newTent.image}`
    : `${supabaseUrl}/storage/v1/object/public/tents-images/${imgName}`;

  let query = supabase.from("tents");

  //create tent
  if (!id) query = query.insert([{ ...newTent, image: imgPath }]);

  // if (error) throw new Error("Tent couldn't be created");

  //Edit tent
  if (id) query = query.update({ ...newTent, image: imgPath }).eq("id", id);
  // if (error) throw new Error("Tent couldn't be edited");

  const { data, error } = await query.select("*");

  if (error) throw new Error("Tent couldn't be edited");

  //upload image
  if (imgPathWithSupabase) return data;

  const { error: storageErr } = await supabase.storage
    .from("tents-images")
    .upload(imgName, newTent.image);

  // delete tent if something went wrong uploading an image
  if (storageErr) {
    await supabase.storage.from("tents").delete().eq("id", data.id);
    throw new Error("Image could't be uploaded & tent couldn't be created");
  }

  return data;
}

export async function deleteTent(id) {
  const { error } = await supabase.from("tents").delete().eq("id", id);

  if (error) throw new Error("Tent couldn't be deleted");
  return null;
}
