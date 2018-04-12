import { ADD_MESSAGE } from '../constant/message.constant';
import { IChattoMessage } from '../../model/message';
import { IChattoAction } from './type.action';

export const addMessage = (message: IChattoMessage): IChattoAction => ({
    type: ADD_MESSAGE,
    payload: message
});
