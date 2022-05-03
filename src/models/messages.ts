import * as mongoose from 'mongoose';
import { Model } from 'mongoose';


const Schema = mongoose.Schema;
type MessageType = mongoose.Document;

const MessageSchema = new Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String
    }
});

const Message: Model<MessageType> = mongoose.model<MessageType>('Message', MessageSchema, 'Message');

export default Message;