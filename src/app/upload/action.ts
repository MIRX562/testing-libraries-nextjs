"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { db } from "@/database/conn";
import { filesTable } from "@/database/schema";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const newFile = await db.insert(filesTable).values({
    name: file.name,
    size: file.size,
    type: file.type,
    url: `./uploads/${file.name}`,
  });

  await fs.writeFile(`./uploads/${file.name}`, buffer);

  revalidatePath("/");
}
