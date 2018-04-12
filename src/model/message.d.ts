import { IChattoUser } from './user';

export interface IChattoMessage {
    user: IChattoUser;
    text: string;
    date: Date;
}
