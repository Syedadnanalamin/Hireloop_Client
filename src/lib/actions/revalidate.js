"use server";

import { revalidatePath } from "next/cache";

export const revalidateProfilePath = async (path) => {
    revalidatePath(path);
};
