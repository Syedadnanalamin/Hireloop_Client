
"use server"
import { headers } from "next/headers";
import { auth } from "../auth";

export const Usersession = async () => {

    await auth.api.getSession({

        headers: await headers()
    });

}