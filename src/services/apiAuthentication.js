import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) return null;

  const { data: userData, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return userData?.user;
}

export async function signout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function UpdateCurrentUser({ fullName, password, avatar }) {
  //Updating password or fullName
  let updatingData;
  if (password) updatingData = { password };
  if (fullName) updatingData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updatingData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  //Upload tha avatar image
  const customAvatarName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageErr } = await supabase.storage
    .from("avatars")
    .upload(customAvatarName, avatar);
  if (storageErr) throw new Error(storageErr.message);

  //Update avatar in the user
  const { data: updateAvatar, error: avatarErr } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/sign/avatars/${customAvatarName}`,
      },
    });

  if (avatarErr) throw new Error(avatarErr.message);

  return updateAvatar;
}
