import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const prerender = true;


export const post: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  

  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }

  /* Create user */
  try {
    
    const userCredential = await auth.createUser({
      email,
      password,
      displayName: name,
    });
    console.log("User created:", userCredential );
    
  } catch (error: any) {
    console.error("User creation failed:", error);
    // Check the error code to determine if the email already exists
  if (error.code === "auth/email-already-exists") {
    return new Response("Email already exists", { status: 400 });
  }
  }

  return redirect("/en/cpanel-login");
};