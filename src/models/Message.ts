export class Message {
    id: number;
    timestamp: Date;
    user: string;
    message: string;
    
    constructor(id: number, timestamp: Date, user: string, message: string) {
        this.id = id;
        this.timestamp = timestamp;
        this.user = user;
        this.message = message;
    }    
}