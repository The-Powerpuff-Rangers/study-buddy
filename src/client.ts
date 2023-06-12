import { Client } from 'appwrite';

const client: Client = new Client().setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export default client;