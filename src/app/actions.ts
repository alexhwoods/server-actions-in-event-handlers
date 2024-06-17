"use server";

import { redirect } from "next/navigation";

export async function goToOtherPage() {
  redirect("/other-page");
}
