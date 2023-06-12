import { Client, Databases, Functions } from "appwrite";
import type { Message } from "../../models/Message";

export class ChatManager {
    private databases: Databases;
    private functions: Functions;

    /// Public chatRoomId which can be null
    public chatRoomId?: string;

    constructor (client: Client) {
        this.databases = new Databases(client);
        this.functions = new Functions(client);
    }
    

    //TODO: Realtime listener for new messages
    public async listenForMessages() {

    }


   async createChatRoom(users: string[]) {
    try {
         const result = await this.functions.createExecution(import.meta.env.VITE_APPWRITE_CREATE_CHAT_ROOM_FUNCTION_ID);
            console.log(result);
    } catch (error) {
        console.error(error);
    }

   
    
  }

  public  async  sendMessage(message: Message) {
        //TODO: Send Message
    }

    public async dispose() {
        //TODO: Dispose Collection
    }

}