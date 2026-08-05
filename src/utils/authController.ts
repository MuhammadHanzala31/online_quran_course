"use server";

import { cookies } from "next/headers";
import { HARDCODED_USER, AUTH_COOKIE_NAME } from "./auth";

export async function loginAction(email: string, password: string) {
  if (email === HARDCODED_USER.email && password === HARDCODED_USER.password) {
    // fake token generate kar rahe hain (real app me JWT / random hash use karein)
    const token = Buffer.from(`${email}-${Date.now()}`).toString("base64");

    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 din
    });

    return { success: true };
  }

  return { success: false, message: "Invalid email or password" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}