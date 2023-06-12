/// <reference types="svelte" />
/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_APPWRITE_PROJECT_ID: string
  readonly VITE_APPWRITE_ENDPOINT: string
  readonly VITE_OPENAI_KEY: string
  readonly VITE_APP_CERTIFICATE: string
  readonly VITE_APP_ID: string
  readonly VITE_APPWRITE_DATABASE_ID: string
  readonly VITE_APPWRITE_CREATE_CHAT_ROOM_FUNCTION_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}