import { authClient } from "../auth-client";

export const getClientSession = async () => {
    const session = await authClient.getSession();
    return session;
};

export const clientSession = getClientSession;
