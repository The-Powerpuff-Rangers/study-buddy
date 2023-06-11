import { Account, ID } from "appwrite";
import client from "../../client";


const account : Account = new Account(client);

export async function login(email: string, password: string) {
    try {
          return await account.createEmailSession(email, password);
    } catch (error) {
        console.error(error);
    }
}

export const loginWithGoogle = async () => {
    try {
        return await account.createOAuth2Session(
            'google',
            `${window.location.origin}/auth/callback`,
        );
    } catch (error) {
        console.error(error);
    }
    
}


export const signUp = async (email: string, password: string) => {
    try {
        return await account.create(ID.unique(),email, password);
    } catch (error) {
        console.error(error);
    }
}

export const logout = async () => {
    try {
        return await account.deleteSession('current');
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async () => {
    try {
        return await account.get();
    } catch (error) {
        console.error(error);
    }
}